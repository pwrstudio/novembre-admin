export default {
    title: 'Product',
    name: 'product',
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
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Shopify ID',
            name: 'shopifyId',
            type: 'string'
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        },
        {
            title: 'Main image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            title: 'Main video',
            description: 'This will override the main image if set',
            name: 'mainVideo',
            type: 'file',
            options: {
                accept: 'video/*'
            }
        },
        {
            name: 'Slideshow',
            type: 'array',
            of: [
                {
                    name: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                },
                {
                    name: 'Video',
                    type: 'file',
                    options: {
                        accept: 'video/*'
                    }
                }
            ]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Introduction', value: 'introduction' },
                        { title: 'Small text', value: 'small' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [],
                    marks: {
                        decorators: [
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Strong', value: 'strong' }

                        ],
                        annotations: [
                            {
                                type: 'object',
                                name: 'link',
                                fields: [
                                    { name: 'href', type: 'string', title: 'Url', validation: (Rule: any) => Rule.required() }
                                ]
                            }
                        ]
                    }
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
            validation: (Rule: any) => Rule.required()
        },
    ],
    preview: {
        select: {
            title: 'title',
            image: 'mainImage',
            editorialState: 'editorialState'
        },
        prepare(selection) {
            const { title, date, image, editorialState } = selection
            const formattedDate = date ? date.substring(0, 10) : 'No date set'
            return {
                title: title,
                description: formattedDate,
                subtitle: editorialState.toUpperCase(),
                media: image
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
