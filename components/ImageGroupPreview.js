import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from 'part:@sanity/base/client'

export default class ImageGroup extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.dir(value)
        const bgColor = value.backgroundColor ? value.backgroundColor.hex : '#f4f4f4'

        const imageBuilder = imageUrlBuilder(sanityClient)
        return (
            <div style={{ minHeight: '100px', padding: '5px', background: bgColor, borderRadius: '0' }}>
                {value.images ? value.images.map(image => <img src={imageBuilder
                    .image(image)
                    .height(100)
                    .url()} style={{ marginRight: '5px' }} />) : 'Empty'}
            </div>
        )
    }
}