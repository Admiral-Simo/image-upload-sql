import React from "react";
import { useDeleteImageMutation } from "../redux/api/apiSlice";

const ImageCard = ({ id, file_src }) => {
  const [deleteImage] = useDeleteImageMutation();
  const handleClick = () => {
    deleteImage(id);
  };
  return (
    <div>
      <img
        key={id}
        src={file_src}
        className="w-full h-96 object-cover"
        alt="img"
      />
      <div>
        <button
          onClick={handleClick}
          className="py-2 px-5 self-end bg-red-400 text-white rounded-lg text-3xl font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
