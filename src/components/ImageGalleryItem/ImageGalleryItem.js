import { useState } from "react";
import { ImageModal } from "../Modal/Modal";
import { ImgGalleryItem, ImgGallery } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ image, largeImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <>
      <ImgGalleryItem onClick={handleModal}>
        <ImgGallery src={image} alt="" />
      </ImgGalleryItem>
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleModal}
          largeImg={largeImage}
        />
      )}
    </>
  );
};
