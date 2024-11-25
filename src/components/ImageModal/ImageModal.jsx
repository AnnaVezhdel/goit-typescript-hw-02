import Modal from "react-modal";

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  const customStyles = {
    overlay: {
      zIndex: "999",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  if (!image || !image.urls.regular || !image.alt_description) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <img
        style={{
          maxHeight: "90vh",
        }}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  );
};

export default ImageModal;
