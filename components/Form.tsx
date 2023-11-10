"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

async function addData(
  email: string,
  name: string,
  nim: string,
  batchYear: number,
  phoneNumber: string
) {
  try {
    const docRef = await addDoc(collection(db, "message"), {
      email: email,
      name: name,
      nim: nim,
      batchYear: batchYear,
      phoneNumber: phoneNumber,
    });
    console.log("Data recorded with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Data not recorded error: ", error);
    return false;
  }
}

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const added = await addData(
      formData.email,
      formData.name,
      formData.nim,
      parseInt(formData.batchYear),
      formData.phoneNumber
    );
    if (added) {
      setFormData({
        email: "",
        name: "",
        nim: "",
        batchYear: "2023",
        phoneNumber: "",
      });

      alert("Data Added");
    }
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
            <label>Nama:</label>
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
              placeholder="240xxxxxxxxxxx"
              className="dark:bg-gray-700 dark:text-white p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label>Angkatan:</label>
            <select
              name="batchYear"
              value={formData.batchYear}
              onChange={handleSelectChange}
              className="dark:bg-gray-700 dark:text-white p-2 rounded w-full"
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2021">2020</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label>No Whatsapp:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              placeholder="+62"
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
