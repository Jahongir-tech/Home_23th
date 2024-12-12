import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/user-slice";

const Admin = () => {
  const dispatch = useDispatch();
  const users = useSelector((s) => s.user.value);

  const handleDelete = (item) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(item));
    }
  };

  const usersItems = users?.map((item) => (
    <div
      key={item.id}
      className="bg-white shadow-md rounded-lg p-6 text-gray-700 flex flex-col justify-between"
    >
      <h3 className="text-xl font-semibold mb-2">Name: {item.name}</h3>
      <p className="text-sm text-gray-500 mb-4">Username: {item.username}</p>
      <button
        onClick={() => handleDelete(item)}
        className="bg-blue-950
         text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div className="min-h-screen py-10 px-10">
      <div className="w-1/2 ">
        <h2 className="text-2xl font-bold text-black mb-10">Users</h2>
        {users.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {usersItems}
          </div>
        ) : (
          <p className="text-white text-lg">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
