import Slideshow from "react-icons/lib/md/view-carousel"
import ImageGroupPreview from '../../components/ImageGroupPreview'

export default {
    type: 'object',
    name: 'slideshow',
    title: 'slidehow',
    icon: Slideshow,
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
    ],
    preview: {
        select: {
            images: 'images'
        },
        component: ImageGroupPreview
    }
}