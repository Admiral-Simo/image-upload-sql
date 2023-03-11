import React, { useState } from "react";
import { useUploadImageMutation } from "./redux/api/apiSlice";

function App() {
  const [uploadImage] = useUploadImageMutation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", selectedImage?.name);
    data.append("file", selectedImage);
    // uploading data
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    // uploadImage(data);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          className="w-full"
          alt="img"
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-6"
      >
        <h1 className="text-5xl mb-10">Uploading Service</h1>
        <div className="p-6 w-fit rounded-lg border-slate-500 border-4 border-dashed">
          <label for="file-upload" class="text-5xl">
            Upload File
            <input
              id="file-upload"
              type="file"
              className="hidden"
              name="image"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </label>
        </div>

        <button className="py-2 px-5 mt-3 w-full bg-red-400 text-white rounded-lg text-3xl font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
