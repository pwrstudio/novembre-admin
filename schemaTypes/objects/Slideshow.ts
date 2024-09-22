import { MdViewCarousel } from "react-icons/md"
import { ImageGroupPreview } from '../../components/ImageGroupPreview'

export default {
    type: 'object',
    name: 'slideshow',
    title: 'Slideshow',
    icon: MdViewCarousel,
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
            title: 'Autoplay',
            name: 'autoplay',
            type: 'boolean'
        },
        {
            title: 'No bottom margin',
            name: 'noBottomMargin',
            type: 'boolean'
        },
    ],
    preview: {
        select: {
            images: 'images',
            backgroundColor: 'backgroundColor'
        },
        prepare(selection) {
            const { images, backgroundColor } = selection
            return {
                title: 'Slideshow',
                images: images,
                media: images && images[0], // Display the first image in the preview as the media
                backgroundColor // You can pass additional data here if needed
            }
        },
    },
}