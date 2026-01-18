import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./redux-store/Slices/Todo/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const dispatch = useDispatch();
  const Todos = useSelector((state) => state.TodoSlice.Todos);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  }

  function handleEdit(todo) {
    setEditId(todo.id);
    setEditText(todo.todo);
  }

  function handleUpdate(id) {
    if (editText.trim()) {
      dispatch(updateTodo({ id: id, todo: editText }));
      setEditId(null);
      setEditText("");
    }
  }

  return (
    <div className="min-h-screen from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
          Todo Application
        </h2>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Write your todo..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Add Todo
        </button>
      </form>

      <ul className="mt-6 w-full max-w-sm space-y-3">
        {Todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white flex items-center justify-between gap-2 px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <span className="flex-1 text-gray-800 font-medium">
                {todo.todo}
              </span>
            )}

            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-sm bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
