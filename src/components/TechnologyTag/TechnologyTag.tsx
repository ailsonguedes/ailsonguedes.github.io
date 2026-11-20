import { useEffect, useState } from 'react';
import styles from './TechnologyTag.module.css';

type IconCatalog = Map<string, string>;

function normalizeName(name: string): string {
    return name.normalize('NFKC').toLowerCase().replace(/[\s_-]+/g, '');
}

let catalogPromise: Promise<IconCatalog> | undefined;

function loadIconCatalog(): Promise<IconCatalog> {
    catalogPromise ??= import('simple-icons/icons.json').then(({ default: icons }) => {
        const catalog: IconCatalog = new Map();
        for (const icon of icons) {
            const names = [
                icon.title,
                icon.slug,
                ...(icon.aliases?.aka ?? []),
                ...(icon.aliases?.old ?? []),
                ...(icon.aliases?.dup?.map((alias) => alias.title) ?? []),
                ...Object.values(icon.aliases?.loc ?? {}),
            ];
            for (const name of names) {
                catalog.set(normalizeName(name), icon.slug);
            }
        }
        catalog.set('java', 'openjdk');
        return catalog;
    });
    return catalogPromise;
}

interface TechnologyTagProps {
    name: string;
    className?: string;
}

export function TechnologyTag({ name, className }: TechnologyTagProps) {
    const [icon, setIcon] = useState<string | null | undefined>(undefined);
    const [failedSrc, setFailedSrc] = useState<string | null>(null);

    useEffect(() => {
        let current = true;
        loadIconCatalog()
            .then((catalog) => {
                if (current) setIcon(catalog.get(normalizeName(name)) ?? null);
            })
            .catch((error: unknown) => {
                console.error('Could not load the technology icon catalog:', error);
                if (current) setIcon(null);
            });
        return () => { current = false; };
    }, [name]);

    const src = icon
        ? `https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/${encodeURIComponent(icon)}.svg`
        : null;
    const unavailable = icon === null || (src !== null && src === failedSrc);

    return (
        <span className={`${styles.tag} ${className ?? ''}`} data-tech={name}>
            {src && !unavailable && (
                <span className={styles.tooltip}>
                    <img
                        src={src}
                        alt=""
                        className={styles.icon}
                        onError={() => {
                            console.warn(`Could not load the icon for ${name}.`);
                            setFailedSrc(src);
                        }}
                    />
                </span>
            )}
            {unavailable && (
                <span className={`${styles.tooltip} ${styles.unavailable}`} aria-label="Icon unavailable" title="Icon unavailable">
                    ?
                </span>
            )}
            {name}
        </span>
    );
}
