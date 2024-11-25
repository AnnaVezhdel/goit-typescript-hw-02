import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, setSelectedImage }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <ImageCard
          setSelectedImage={setSelectedImage}
          key={image.id}
          image={image}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
