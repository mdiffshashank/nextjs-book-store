import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-4">
      <p className="mb-4 text-xl">Join Now</p>
      <input
        type="email"
        id="emailId"
        name="emailId"
        placeholder="example@email.com"
        className="p-3 rounded"
      />
      <button
        type="button"
        className="btn bg-gray-500 text-white hover:bg-gray-800 px-6 py-3 rounded ml-6"
      >
        {"-->"}
      </button>
    </div>
  );
};

export default Subscribe;
