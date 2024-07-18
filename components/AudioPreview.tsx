export const AudioPreview = (props: any) => {
    const { value } = props

    const url = value.audio && value.audio.asset && value.audio.asset._ref ? 'https://cdn.sanity.io/files/gj963qwj/production/' + value.audio.asset._ref
        .replace('file-', '')
        .replace('-mp3', '.mp3') : ''

    return (
        <div style={{ width: '100%', padding: '40px', border: '0', borderRadius: '0px' }}>
            {value.audio ? <audio src={url} controls style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'No audiofile selected'}
        </div >
    )
}
