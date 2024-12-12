import React from 'react'
import { Image } from 'react-bootstrap'

const EEgGraph = () => {

    const data = [
        "https://storage.googleapis.com/sih-3dbe7.appspot.com/graphs/data.set1.jpg",
        "https://storage.googleapis.com/sih-3dbe7.appspot.com/graphs/data.set2.jpg",
        "https://storage.googleapis.com/sih-3dbe7.appspot.com/graphs/data.set3.jpg",
        "https://storage.googleapis.com/sih-3dbe7.appspot.com/graphs/data.set4.jpg",
        "https://storage.googleapis.com/sih-3dbe7.appspot.com/graphs/data.set5.jpg"
    ]

    return (
        <div className="text-center" >{data.map(src => (
            <Image src={src} className="mt-50" />
        ))}</div>
    )
}

export default EEgGraph