import styles from './MarkdownVideoEmbed.module.css';

interface MarkdownVideoEmbedProps {
    src?: string;
    title?: string;
}

interface ApprovedEmbed {
    url: string;
    isPortrait: boolean;
}

function getApprovedEmbed(src: string | undefined): ApprovedEmbed | null {
    if (!src) return null;

    let url: URL;
    try {
        url = new URL(src);
    } catch {
        return null;
    }

    if (url.protocol !== 'https:' || url.port || url.username || url.password) return null;

    const host = url.hostname.toLowerCase();
    const path = url.pathname;
    const isYoutube = (
        ['youtube.com', 'www.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host) &&
        /^\/embed\/(?:[A-Za-z0-9_-]+|videoseries)\/?$/.test(path)
    );
    const isVimeo = host === 'player.vimeo.com' && /^\/video\/\d+\/?$/.test(path);
    const isTikTok = (
        ['tiktok.com', 'www.tiktok.com'].includes(host) &&
        /^\/embed\/v2\/\d+\/?$/.test(path)
    );
    const isInstagram = (
        ['instagram.com', 'www.instagram.com'].includes(host) &&
        /^\/(?:p|reel|tv)\/[A-Za-z0-9_-]+\/embed\/?$/.test(path)
    );

    if (isYoutube || isVimeo) return { url: url.href, isPortrait: false };
    if (isTikTok || isInstagram) return { url: url.href, isPortrait: true };
    return null;
}

export function MarkdownVideoEmbed({ src, title }: MarkdownVideoEmbedProps) {
    const embed = getApprovedEmbed(src);
    if (!embed) return null;

    return (
        <div className={`${styles.embed} ${embed.isPortrait ? styles.portrait : ''}`}>
            <iframe
                src={embed.url}
                title={title?.trim() || 'Embedded video'}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
