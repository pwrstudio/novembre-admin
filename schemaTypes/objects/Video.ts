import { MdVideocam } from "react-icons/md"

export default {
    type: 'object',
    name: 'video',
    title: 'Embedded video',
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
            title: 'No bottom margin',
            name: 'noBottomMargin',
            type: 'boolean'
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        }
    ],
    preview: {
        select: {
            url: 'video',
        },
        prepare(selection) {
            const { url } = selection
            return {
                title: url
            }
        },
    }
}