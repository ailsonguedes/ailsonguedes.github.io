import { defaultSchema } from 'rehype-sanitize';

export const markdownSanitizeSchema = {
    ...defaultSchema,
    tagNames: [...(defaultSchema.tagNames ?? []), 'iframe'],
    attributes: {
        ...defaultSchema.attributes,
        iframe: ['src', 'title'],
        img: ['src', 'alt', 'title', 'width', 'height'],
    },
    protocols: {
        ...defaultSchema.protocols,
        src: [...(defaultSchema.protocols?.src ?? []), 'https'],
    },
};
