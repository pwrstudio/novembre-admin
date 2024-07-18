import { MdApps } from "react-icons/md"

export default {
    type: 'object',
    name: 'thumbnailGroup',
    title: 'Small images',
    description: 'Show group of small images',
    icon: MdApps,
    fields: [
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                }
            ]
        },
        {
            title: 'No bottom margin',
            name: 'noBottomMargin',
            type: 'boolean'
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        },
        {
            type: 'text',
            name: 'caption',
            title: 'Caption'
        },

    ],
}

