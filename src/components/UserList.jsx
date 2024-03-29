import React from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { addUsers } from "../store/thunks/addUser";
import useThunk from "../hooks/useThunk";
import UserListItems from "./UserListItems";
import { useFetchUsersQuery, useAddUserMutation } from "../store";
const UserList = () => {
  const { data, error, isFetching } = useFetchUsersQuery();
  const [addUsers, result] = useAddUserMutation();
  const handleAddUser = (user) => {
    addUsers(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={5} classExtend="h-10 w-full" />;
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = data.map((user) => {
      return <UserListItems key={user.id} user={user} />;
    });
  }

  // const renderUser = data.map((user) => {
  //   return (
  //     <div key={user.id} className="mb-2.5 border rounded">
  //       <div className="flex p-2 justify-between items-center cursor-pointer">
  //         {user.name}
  //       </div>
  //     </div>
  //   );
  // });
  return (
    <div>
      <div className="flex flex-row justify-between item-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={result.isLoading} onClick={handleAddUser}>
          + Add user
        </Button>
        {result.isError && <div>Error creating user</div>}
      </div>
      {content}
      {/* {console.log(data.length)} */}
    </div>
  );
};

export default UserList;
