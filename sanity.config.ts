import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { colorInput } from '@sanity/color-input'
import { googleMapsInput } from '@sanity/google-maps-input'
import { schemaTypes } from './schemaTypes'
import deskStructure from './deskStructure'

export default defineConfig({
    name: 'default',
    title: 'NOVEMBRE.GLOBAL',

    projectId: 'gj963qwj',
    dataset: 'production',

    plugins: [
        googleMapsInput({ apiKey: 'my-api-key' }),
        colorInput(),
        structureTool({ structure: deskStructure })
    ],

    document: {
        newDocumentOptions: (prev, { creationContext }) => {
            const { type } = creationContext;
            const DISABLED_TYPES = [
                'meta',
                'productList'
            ];
            if (type === 'global') {
                return prev.filter((template) => !DISABLED_TYPES.includes(template.templateId));
            }
            return prev;
        },
    },

    schema: {
        types: schemaTypes,
    },
})
