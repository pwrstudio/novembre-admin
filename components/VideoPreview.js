import React from 'react'
import PropTypes from 'prop-types'

export default class SingleImage extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.dir(value)
        const bgColor = value.backgroundColor ? value.backgroundColor.hex : '#f4f4f4'

        const url = value.video && value.video.asset && value.video.asset._ref ? 'https://cdn.sanity.io/files/gj963qwj/production/' + value.video.asset._ref
            .replace('file-', '')
            .replace('-mp4', '.mp4') : ''


        return (
            <div style={{ width: '100%', padding: '40px', background: bgColor, border: '0', borderRadius: '0px' }}>
                {value.video ? <video src={url} controls style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'No video selected'}
            </div >
        )
    }
}