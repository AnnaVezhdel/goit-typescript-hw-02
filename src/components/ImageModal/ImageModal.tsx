import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { ImageModalProps } from "../App/App.types";

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) return null;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <button onClick={onRequestClose} className={s.closeBtn}>
          x
        </button>
        <img src={image.urls.regular} alt="" className={s.modalImg} />
      </Modal>
    </div>
  );
};

export default ImageModal;
