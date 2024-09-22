// Embed.js
import { MdCode } from "react-icons/md"
// import EmbedPreview from '../components/EmbedPreview'

export default {
    name: 'arbitraryEmbed',
    type: 'object',
    title: 'Embed code',
    icon: MdCode,
    fields: [
        {
            title: 'Embed code',
            name: 'embedCode',
            type: 'text'
        },
    ]
}