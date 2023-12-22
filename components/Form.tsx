"use client";
import React, { useState } from "react";
import { db, storage } from "@/service/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { serverTimestamp } from "firebase/firestore";
import Modal from "./Modal";
import Loading from "./Loading";

type FormFile = File | null;

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    nim: "",
    batchYear: "2023",
    phoneNumber: "",
  });

  const [file, setFile] = useState<FormFile>(null);

  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf"];
  const maxFileSize = 2 * 1024 * 1024;

  async function addData(
    email: string,
    name: string,
    nim: string,
    batchYear: number,
    phoneNumber: string,
    fileUrl: string
  ) {
    try {
      const docRef = await addDoc(collection(db, "message"), {
        email: email,
        name: name,
        nim: nim,
        batchYear: batchYear,
        phoneNumber: phoneNumber,
        fileUrl: fileUrl,
        timestamp: serverTimestamp(),
      });

      console.log("Data recorded with ID: ", docRef.id);
      setShowModal(true);
    } catch (error) {
      console.error("Data not recorded error: ", error);
      return false;
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      if (file) {
        if (!allowedFileTypes.includes(file.type)) {
          alert(
            "Tipe file yang tidak didukung. Tolong gunakan format JPG, JPEG, PNG, atau PDF file."
          );
          return;
        }

        if (file.size > maxFileSize) {
          alert(
            "Ukuran file maximum limit 2MB. Tolong upload file ukuran lebih kecil."
          );
          return;
        }

        const storageRef = ref(storage, `bukti-pembayaran/${file.name}`);
        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);

        await addData(
          formData.email,
          formData.name,
          formData.nim,
          parseInt(formData.batchYear),
          formData.phoneNumber,
          downloadURL
        );
      }

      setFormData({
        email: "",
        name: "",
        nim: "",
        batchYear: "2023",
        phoneNumber: "",
      });

      setFile(null);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-full border-gray-400 border-dashed border-4 m-4 p-4">
      <div className="bg-black text-white p-4 m-2 rounded-lg w-full max-w-md border-white border-dashed border-2">
        <h2 className="text-2xl mb-4">Registration On-The-Spot</h2>
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Pastikan email valid"
                className="bg-white text-black p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label>Nama:</label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Nama kamu"
                className="bg-white text-black p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label>NIM:</label>
              <input
                type="text"
                name="nim"
                autoComplete="off"
                value={formData.nim}
                onChange={handleInputChange}
                required
                placeholder="240xxxxxxxxxxx"
                className="bg-white text-black p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label>Angkatan:</label>
              <select
                name="batchYear"
                value={formData.batchYear}
                onChange={handleSelectChange}
                className="bg-white text-black p-2 rounded w-full"
              >
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="mb-4">
              <label>No Whatsapp:</label>
              <input
                type="tel"
                name="phoneNumber"
                autoComplete="off"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="08xxxxxxxxxx"
                className="bg-white text-black p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label>Bukti Pembayaran (max 2MB):</label>
              <input
                type="file"
                onChange={(e) =>
                  setFile(e.target.files ? e.target.files[0] : null)
                }
                required
                className="bg-white text-black p-2 rounded w-full"
              />
            </div>
            <div>
              <button
                type="submit"
                className="dark:bg-blue-600 text-white p-2 rounded w-full"
                // className="bg-gray-400 text-white p-2 rounded w-full"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <h1 className="bg-green-400 rounded m-2 p-2 font-black">
              Pendaftaran Berhasil
            </h1>
            <h2 className="m-2 p-2 font-extrabold">
              Terima Kasih sudah mendaftar.
            </h2>
            <p className="p-2">
              Silahkan menuju ke meja registrasi untuk konfirmasi kehadiran.
            </p>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Form;
