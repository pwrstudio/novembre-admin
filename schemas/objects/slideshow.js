// ICONS
import {
    MdViewCarousel
  } from "react-icons/md"
import ImageGroupPreview from '../../components/ImageGroupPreview'

export default {
    type: 'object',
    name: 'slideshow',
    title: 'slidehow',
    icon: MdViewCarousel,
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
            images: 'images'
        },
        component: ImageGroupPreview
    }
}