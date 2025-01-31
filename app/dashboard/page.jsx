import React from "react";

import AddInterviewDetais from "./_components/AddInterviewDetails";
function Dashboard() {
  return (
    <>
      <div className="p-8 container">
        <h2 className="font-bold text-xl ">Dashboard</h2>
        <h2 className="text-gray-600 font-normal mb-8">
          create your mock interview
        </h2>

        <AddInterviewDetais />
      </div>
    </>
  );
}
export default Dashboard;
