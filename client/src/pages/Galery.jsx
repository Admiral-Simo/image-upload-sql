import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  useGetImagesQuery,
  useUploadImageMutation,
} from "../redux/api/apiSlice";
import { BsImageFill } from "react-icons/bs";
import ImageCard from "../components/ImageCard";
import useCheckAuth from "../hooks/useCheckAuth";

function Galery() {
  const [uploadImage] = useUploadImageMutation();
  const { data: images } = useGetImagesQuery();
  useCheckAuth();

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log();
    const data = new FormData();
    data.append("name", acceptedFiles[0]?.name);
    data.append("file", acceptedFiles[0]);
    // uploading data
    uploadImage(data);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="shadow-xl flex flex-col lg:flex-row justify-between items-center rounded-lg p-6">
          <h1 className="text-5xl mb-10 text-center">Uploading Service</h1>
          <div
            {...getRootProps()}
            className="flex flex-col justify-center items-center gap-3 border-dashed border-2 p-6 rounded-md"
          >
            <input {...getInputProps()} />

            <BsImageFill size={30} color="#1C88FF" />
            <p className="font-semibold md:text-2xl">
              Drop your image here, or{" "}
              <span className="text-[#479BFF] font-black">browse</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {images?.map(({ id, file_src }) => {
            return <ImageCard key={id} id={id} file_src={file_src} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Galery;
