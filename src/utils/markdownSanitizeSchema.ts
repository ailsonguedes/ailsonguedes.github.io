import { defaultSchema } from 'rehype-sanitize';

export const markdownSanitizeSchema = {
    ...defaultSchema,
    tagNames: [...(defaultSchema.tagNames ?? []), 'iframe', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
    attributes: {
        ...defaultSchema.attributes,
        iframe: ['src', 'title'],
        img: ['src', 'alt', 'title', 'width', 'height'],
        th: ['align'],
        td: ['align'],
    },
    protocols: {
        ...defaultSchema.protocols,
        src: [...(defaultSchema.protocols?.src ?? []), 'https'],
    },
};
