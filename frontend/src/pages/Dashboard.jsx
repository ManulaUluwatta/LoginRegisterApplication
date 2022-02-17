import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Dashboard() {
  //   const { user} = useSelector(
  //     (state) => state.auth
  //   );

  const user = JSON.parse(localStorage.getItem("user"));

  // JSON.stringify(res.data)
  return (
    <>
      <div className="py-14">
        <ul>
          <li>{user ?user.fullName : ''}</li>
          <li>{user? user.email : ''}</li>
          <li>{user? user.userName : ''}</li>
        </ul>
      </div>
      ;
    </>
  );
}

export default Dashboard;
