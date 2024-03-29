import React from "react";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

const PhotoItemsList = ({ photo }) => {
  const [removePhoto, resultRemovePhoto] = useRemovePhotoMutation();

  const handleClickRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div
      onClick={handleClickRemovePhoto}
      className="relative m-2 cursor-pointer">
      <img src={photo.url} className="h-20 w-20" alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 ">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotoItemsList;
