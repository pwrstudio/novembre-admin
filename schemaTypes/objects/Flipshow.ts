import {
    MdAutoStories
} from "react-icons/md"

export default {
    type: 'object',
    name: 'flipshow',
    title: 'Flipshow',
    icon: MdAutoStories,
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
    ],
}