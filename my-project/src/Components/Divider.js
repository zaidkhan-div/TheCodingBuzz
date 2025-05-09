const Divider = ({ width = '100%', height = '1px', color = '#505050', opacity = '0.2' }) => {
    return (
        <div
            className="w-full"
            style={{
                maxWidth: width === '100%' ? '100%' : width,
                height,
                backgroundColor: color,
                opacity
            }}
        />
    )
}

export default Divider