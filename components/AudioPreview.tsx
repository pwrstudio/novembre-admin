export const AudioPreview = (props: any) => {
    const { audio, title } = props

    const url = audio && audio.asset && audio.asset._ref ? 'https://cdn.sanity.io/files/gj963qwj/production/' + audio.asset._ref
        .replace('file-', '')
        .replace('-mp3', '.mp3') : ''

    return (
        <div style={{ width: '100%', padding: '40px', border: '0', borderRadius: '0px' }}>
            <div><strong>{title}</strong></div>
            {audio ? <audio src={url} controls style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'No audiofile selected'}
        </div >
    )
}
