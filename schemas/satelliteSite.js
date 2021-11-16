export default {
    title: 'Satellite site',
    name: 'satelliteSite',
    type: 'document',
    fields: [
        {
            name: "editorialState",
            type: "string",
            options: {
                list: [
                    { title: "Preview", value: "preview" },
                    { title: "Live", value: "live" }
                ],
            }
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Header',
            name: 'header',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false
            },
            fields: [
                {
                    title: 'Show Novembre logo',
                    name: 'showNovembreLogo',
                    type: 'boolean'
                },
                {
                    title: 'Show title',
                    name: 'showTitle',
                    type: 'boolean'
                },
                {
                    name: 'externalLogo',
                    title: 'External logo',
                    type: 'image',
                },
            ]
        },
        {
            title: 'Background',
            name: 'background',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false
            },
            fields: [
                {
                    title: 'Background image',
                    name: 'backgroundImage',
                    type: 'image',
                },
                {
                    title: 'Background color',
                    name: 'backgroundColor',
                    type: 'color'
                },
            ]
        },
        {
            title: 'Metadata',
            name: 'metadata',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false
            },
            fields: [
                {
                    name: 'mainImage',
                    description: 'Used when sharing article on social media etc...',
                    title: 'Main image',
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                },
            ]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'singleImage',
                },
                {
                    type: 'imageGroup',
                },
                {
                    type: 'videoLoop',
                },
                {
                    type: 'video',
                },
                {
                    type: 'slideshow',
                },
                {
                    type: 'audio',
                },
                {
                    type: 'textOnly',
                }
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200
            },
            validation: Rule => Rule.required()
        },
    ],
    preview: {
        select: {
            title: 'title',
            image: 'mainImage',
            editorialState: 'editorialState',
            slug: 'slug'
        },
        prepare(selection) {
            const { title, image, editorialState, slug } = selection
            return {
                title: title,
                // subtitle: editorialState.toUpperCase(),
                media: image,
                subtitle: 'novembre.global/site/' + slug.current
            }
        }
    },
    orderings: [
        {
            title: 'Title',
            name: 'titleDesc',
            by: [
                { field: 'title', direction: 'desc' }
            ]
        }
    ]
}
