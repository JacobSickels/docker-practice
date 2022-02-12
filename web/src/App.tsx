import React from "react";
import { useQuery } from "react-query";
import "./App.css";

function App() {
  const { data } = useQuery<Array<{ id: number; name: string; email: string }>>(
    "users",
    () => {
      return fetch("http://localhost:5000/users").then((resp) => resp.json());
    }
  );

  return (
    <div>
      {data?.map((user) => {
        return (
          <div key={user.id}>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
