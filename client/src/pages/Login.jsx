import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../redux/api/apiSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Login] = useLoginMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && password) {
      Login({ name, password }).then((res) =>
        console.log(res)
      );
    }
    setName("");
    setPassword("");
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white mx-2 p-6 rounded-lg w-[500px]"
      >
        <h1 className="text-3xl">Login</h1>
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
        <Link to="/register">register</Link>
      </form>
    </div>
  );
};

export default Login;
