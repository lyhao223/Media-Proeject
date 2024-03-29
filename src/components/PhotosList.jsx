import React from "react";
import PhotoItemsList from "./PhotoItemsList";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
const PhotosList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResult] = useAddPhotoMutation();
  const handleClickAddPhoto = () => {
    addPhoto(album);
  };
  let content;
  if (isFetching) {
    content = <Skeleton times={3} classExtend="h-10 w-full" />;
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoItemsList key={photo.id} photo={photo} />;
    });
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <div className="text-lg font-bold">Photos in {album.name}</div>
        <Button
          className="mr-2"
          onClick={handleClickAddPhoto}
          loading={addPhotoResult.isLoading}>
          + Add
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-between">
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
