import UserList from "./components/UserList";
import { useFetchUsersQuery } from "./store";

function App() {
  return (
    <div className="container mx-auto">
      <UserList />
    </div>
  );
}

export default App;
