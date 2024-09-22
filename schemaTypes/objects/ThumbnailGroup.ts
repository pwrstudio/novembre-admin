import { MdApps } from "react-icons/md"
import { ImageGroupPreview } from '../../components/ImageGroupPreview'

export default {
    type: 'object',
    name: 'thumbnailGroup',
    title: 'Small images',
    description: 'Show group of small images',
    icon: MdApps,
    components: {
        preview: ImageGroupPreview
    }, 
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
    select: {
        images: 'images',
        backgroundColor: 'backgroundColor'
    },
    prepare(selection) {
        const { images, backgroundColor } = selection
        return {
            title: 'Thumbnail group',
            images: images,
            media: images && images[0], // Display the first image in the preview as the media
            backgroundColor // You can pass additional data here if needed
        }
    },
}

