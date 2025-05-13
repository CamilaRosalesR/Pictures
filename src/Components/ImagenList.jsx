import ImagenShow from "./ImagenShow"
import './ImagenList.css'

const ImagenList = ({images}) => {
    const renderImage = images.map((image) => {
        return <ImagenShow key={image.id} image={image} />
    })
    return (
        <div className="image-list">
        {renderImage}
        </div>
    )
}

export default ImageList