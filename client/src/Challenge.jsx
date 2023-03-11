import React, { useState } from "react";

const Challenge = () => {
  const [color, setColor] = useState("");
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="space-y-3">
          <div className="w-96 h-96 shadow-xl flex text-white justify-center items-center text-5xl" style={{background: color}}>{color}</div>
          <input
            className="w-full bg-gray-200 border shadow-xl border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
          />
      </div>
    </div>
  );
};

export default Challenge;
