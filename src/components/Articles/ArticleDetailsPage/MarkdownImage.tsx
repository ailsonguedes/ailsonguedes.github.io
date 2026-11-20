interface MarkdownImageProps {
    src?: string;
    alt?: string;
    title?: string;
}

export function MarkdownImage({ src, alt, title }: MarkdownImageProps) {
    const isBadge = src && (src.includes('shields.io') || src.includes('img.shields.io'));
    
    if (isBadge) {
        return (
            <img
                src={src}
                alt={alt ?? ''}
                title={title}
                style={{
                    display: 'inline-block',
                    marginRight: '0.5rem',
                    marginBottom: '0.25rem',
                    verticalAlign: 'middle',
                }}
            />
        );
    }

    return <img src={src} alt={alt ?? ''} title={title} loading="lazy" decoding="async" />;
}
