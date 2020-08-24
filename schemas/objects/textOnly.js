import Title from "react-icons/lib/md/title"

export default {
    type: 'object',
    name: 'textOnly',
    title: 'Text only',
    icon: Title,
    fields: [
        {
            title: 'Use title',
            name: 'placeholder',
            type: 'boolean'
        }
    ]
}