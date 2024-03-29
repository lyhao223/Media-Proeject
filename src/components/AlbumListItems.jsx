import React from "react";
import Button from "./Button";
import ExpandableList from "./ExpandableList";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";
const AlbumListItems = ({ album }) => {
  const [removeAlbum, result] = useRemoveAlbumMutation(album);
  const handleClickRemove = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        className="mr-2"
        onClick={handleClickRemove}
        loading={result.isLoading}>
        <GoTrashcan />
      </Button>
      {album.name}
    </>
  );
  return (
    <ExpandableList key={album.id} header={header}>
      List of Albums
      <PhotosList album={album} />
    </ExpandableList>
  );
};

export default AlbumListItems;
