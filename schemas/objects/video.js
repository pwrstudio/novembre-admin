// ICONS
import {
    MdVideocam
} from "react-icons/md"

export default {
    type: 'object',
    name: 'video',
    title: 'Embeded video',
    icon: MdVideocam,
    fields: [
        {
            title: 'Video',
            name: 'video',
            type: 'url'
        },
        {
            title: 'Size',
            name: "size",
            type: "string",
            options: {
                list: [
                    { title: "Medium", value: "medium" },
                    { title: "Big", value: "big" },
                    { title: "Full-width", value: "full" }
                ],
            }
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        },
        {
            title: 'No bottom margin',
            name: 'noBottomMargin',
            type: 'boolean'
        },
    ]
}