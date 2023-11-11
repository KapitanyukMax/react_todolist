import { useState } from "react";
import "./Users.css";
import { USERS } from "./users-mock.js";

function Users() {
  const [users, setUsers] = useState(USERS);
  const add = () => setUsers([...users, { id: users.length + 1, name: "Oleg" }]);
  
  return (
    <div className="Users">
      <h2>Users List</h2>

      <ul>
        {users.map(user => <li key={user.id}>[{user.id}] - {user.name}</li>)}
      </ul>

      <button onClick={add}>Add User</button>
    </div>
  );
}

export default Users;
