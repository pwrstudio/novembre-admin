import imageUrlBuilder from '@sanity/image-url'
import { useClient } from 'sanity'

export const ImageGroupPreview = (props: any) => {
    const { value } = props
    const sanityClient = useClient({ apiVersion: '2024-07-01' })

    const bgColor = value.backgroundColor ? value.backgroundColor.hex : '#f4f4f4'

    const imageBuilder = imageUrlBuilder(sanityClient)
    return (
        <div style={{ minHeight: '100px', padding: '5px', background: bgColor, borderRadius: '0' }}>
            {value.images ? value.images.map(image => <img src={image.asset ? imageBuilder
                .image(image)
                .height(100)
                .url() : ''} style={{ marginRight: '5px' }} />) : 'Empty'}
        </div>
    )
}