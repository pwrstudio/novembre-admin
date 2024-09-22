import imageUrlBuilder from '@sanity/image-url'
import { useClient } from 'sanity'

export const ImageGroupPreview = (props: any) => {
    const { backgroundColor, images, title } = props
    const sanityClient = useClient({ apiVersion: '2024-07-01' })

    const bgColor = backgroundColor ? backgroundColor.hex : '#f4f4f4'

    const imageBuilder = imageUrlBuilder(sanityClient)
    return (
        <div style={{ minHeight: '100px', padding: '5px', background: bgColor, borderRadius: '0' }}>
            <div><strong>{title}</strong></div>
            {images ? images.map(image => <img src={image.asset ? imageBuilder
                .image(image)
                .height(100)
                .url() : ''} style={{ marginRight: '5px' }} />) : 'Empty'}
        </div>
    )
}