import imageUrlBuilder from '@sanity/image-url'
import { useClient } from 'sanity'


export const SingleImagePreview = (props: any) => {

    const { alignment, image, title, fullwidth, backgroundColor } = props
    const sanityClient = useClient({ apiVersion: '2024-07-01' })

    const imageBuilder = imageUrlBuilder(sanityClient)
    
    const bgColor = backgroundColor ? backgroundColor.hex : '#f4f4f4'
    let align = ''
    if (alignment === 'left') {
        align = 'flex-start'
    } else if (alignment === 'right') {
        align = 'flex-end'
    } else {
        align = 'center'
    }
    if (fullwidth) {
        align = 'flex-start'
    }
    return (
        <div style={{ display: 'inline-flex', minHeight: '100px', justifyContent: align, width: '100%', padding: '40px', background: bgColor, border: '0', borderRadius: '0px' }}>
            <div><strong>{title}</strong></div>
            {image && image.asset ? <img src={imageBuilder
                .image(image)
                .height(200)
                .quality(100)
                .url()} 
                alt='novembre'/> : 'No image selected'}
            {/* <div>{caption}</div> */}
        </div>
    )
}