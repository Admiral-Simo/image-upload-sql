import { useCallback, useState } from "react";
import { useRegisterMutation } from "../redux/api/apiSlice";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { BsImageFill } from "react-icons/bs";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [Register] = useRegisterMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && password) {
      Register(data).then((res) => console.log(res.data));
    }
    setName("");
    setPassword("");
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log();
    const data = new FormData();
    data.append("name", acceptedFiles[0]?.name);
    data.append("file", acceptedFiles[0]);
    // uploading data
    setData(data);
    Register({ ...data, name, password });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white mx-2 p-6 rounded-lg w-[500px]"
      >
        <h1 className="text-3xl">Register</h1>
        <label htmlFor="image">Profile Image</label>
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

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          className="py-5 px-5 bg-gray-300 rounded-l focus:outline-none"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          className="py-5 px-5 bg-gray-300 rounded-l focus:outline-none"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="py-2 w-full rounded-lg text-white bg-red-400"
          type="submit"
        >
          Submit
        </button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
