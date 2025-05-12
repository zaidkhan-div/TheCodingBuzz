import React from 'react'
import Image from 'next/image'

const TwoDivComp = ({ title, para, img }) => {
    return (
        <div>
            <div>
                {title && <h2>{title}</h2>}
                {para && <p>{para}</p>}
            </div>
            <div>
                {img && <Image src="/profile.png" width="663px" height="408px" alt="Picture of the author" />}
            </div>
        </div>
    )
}

export default TwoDivComp