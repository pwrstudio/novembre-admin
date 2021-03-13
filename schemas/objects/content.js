// CONTENT
export default {
    type: 'object',
    name: 'content',
    title: 'Content',
    options: { collapsible: true, collapsed: true },
    fields: [
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
                                    { name: 'href', type: 'string', title: 'Url', validation: Rule => Rule.required() }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: 'imageGroup'
                },
                {
                    type: 'slideshow'
                },
                {
                    type: 'video'
                },
                {
                    type: 'audio'
                },
                {
                    type: 'arbitraryEmbed'
                },
            ]
        },
    ]
}



// {
//     name: 'internalLink',
//         type: 'object',
//             title: 'Internal link',
//                 fields: [
//                     {
//                         name: 'reference',
//                         type: 'reference',
//                         title: 'Reference',
//                         to: [{ type: 'article' }]
//                     }
//                 ]
// }