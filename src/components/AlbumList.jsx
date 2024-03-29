import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandableList from "./ExpandableList";
import Button from "./Button";
import AlbumListItems from "./AlbumListItems";
const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  console.log(data);
  const [addAlbum, result] = useAddAlbumMutation();
  console.log(result);

  const handleClick = () => {
    addAlbum(user);
  };
  let content;
  if (isLoading) {
    content = <Skeleton times={3} classExtend="h-10 w-full" />;
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItems key={album.id} album={album} />;
    });
  }
  return (
    <div>
      <div className="flex justify-between pb-2">
        Album for {user.name}
        <Button loading={result.isLoading} onClick={handleClick}>
          Add Album
        </Button>
      </div>
      {content}
    </div>
  );
};

export default AlbumList;
