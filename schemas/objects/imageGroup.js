import ImageGroupPreview from '../../components/ImageGroupPreview'
import ImageGroupIcon from "react-icons/lib/md/photo-album"


export default {
    type: 'object',
    name: 'imageGroup',
    title: 'Image(s)',
    description: 'Show up to four images in a horizontal layout',
    icon: ImageGroupIcon,
    // validation: Rule => Rule.max(4),
    fields: [
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            validation: Rule => Rule.max(4),
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
            title: 'Alignment',
            name: 'alignment',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Center', value: 'center' },
                    { title: 'Right', value: 'right' }
                ]
            }
        },
        {
            title: 'Full-width',
            description: "NOTE: will only show one image",
            name: 'fullwidth',
            type: 'boolean'
        },
        {
            title: 'Limit height',
            description: "in percentage of window height",
            name: 'maxHeight',
            type: 'number',
            validation: Rule => Rule.max(100).min(40)
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
    preview: {
        select: {
            images: 'images',
            backgroundColor: 'backgroundColor'
        },
        component: ImageGroupPreview
    },
}

