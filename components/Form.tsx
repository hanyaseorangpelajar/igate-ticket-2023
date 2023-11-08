"use client";
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    nim: "",
    batchYear: "2023",
    phoneNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen border-gray-400 border-dashed border-4 m-4">
      <div className="dark:bg-gray-900 text-white p-4 m-2 rounded-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Make sure the email is valid"
              className="dark:bg-gray-700 dark:text-white p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your name"
              className="dark:bg-gray-700 dark:text-white p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label>NIM:</label>
            <input
              type="text"
              name="nim"
              value={formData.nim}
              onChange={handleInputChange}
              required
              placeholder="240**********"
              className="dark:bg-gray-700 dark:text-white p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label>Batch Year:</label>
            <select
              name="batchYear"
              value={formData.batchYear}
              onChange={handleSelectChange}
              className="dark:bg-gray-700 dark:text-white p-2 rounded w-full"
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              placeholder="08xxxxxxxxxx"
              className="dark:bg-gray-700 dark:text-white p-2 rounded w-full"
            />
          </div>
          <div>
            <button
              type="submit"
              className="dark:bg-blue-600 text-white p-2 rounded w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
