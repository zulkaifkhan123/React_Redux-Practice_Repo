import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "./redux-store/Slices/Todo/todoSlice";

function App () {
  let [input , setInput ] = useState("");
  let dispatch = useDispatch();

  function handleSubmit (e) {
    e.preventDefault();
    if(!input.trim()) {
      dispatch(addTodo(input))
      setInput("");
    }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Simple Form
        </h2>

        <input
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          type="text"
          placeholder="Enter something..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4 transition duration-150"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
