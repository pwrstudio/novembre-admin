import { MdApps } from "react-icons/md"
import { ImageGroupPreview } from '../../components/ImageGroupPreview'

export default {
    type: 'object',
    name: 'thumbnailGroup',
    title: 'Small images',
    description: 'Show group of small images',
    icon: MdApps,
    // validation: (Rule: any) => Rule.max(4),
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
    // preview: {
    //     select: {
    //         images: 'images',
    //         backgroundColor: 'backgroundColor'
    //     },
    //     component: ImageGroupPreview
    // },
}

