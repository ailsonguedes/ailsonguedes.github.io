import { defaultSchema } from 'rehype-sanitize';

export const markdownSanitizeSchema = {
    ...defaultSchema,
    tagNames: [...(defaultSchema.tagNames ?? []), 'iframe'],
    attributes: {
        ...defaultSchema.attributes,
        iframe: ['src', 'title'],
    },
    protocols: {
        ...defaultSchema.protocols,
        src: [...(defaultSchema.protocols?.src ?? []), 'https'],
    },
};
