import { ImageCardProps } from "../App/App.types";
import s from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({item, handleImageClick}) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => handleImageClick(item)}
        className={s.card} />
    </div>
  )
}

export default ImageCard
