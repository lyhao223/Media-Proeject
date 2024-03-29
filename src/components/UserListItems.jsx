import React from "react";
import useThunk from "../hooks/useThunk";
import { deleteUser } from "../store/thunks/deleteUsers";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandableList from "./ExpandableList";
import AlbumList from "./AlbumList";
import { useRemoveUserMutation } from "../store";
const UserListItems = ({ user }) => {
  const [removeUser, result] = useRemoveUserMutation(user);

  const handleDeleteUser = () => {
    removeUser(user.id);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        onClick={handleDeleteUser}
        loading={result.isLoading}>
        <GoTrashcan />
      </Button>
      {result.isError && <div>Error deleting user</div>}
      {user.name}
    </>
  );
  return (
    <ExpandableList header={header} user={user}>
      <AlbumList user={user} />
    </ExpandableList>
  );
};

export default UserListItems;
