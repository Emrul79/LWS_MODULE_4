import { useRef, useState } from "react";
import { flushSync } from "react-dom";
export default function MyFlushSync() {
  const listRef = useRef(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };

    flushSync(() => {
      setText("");
      setTodos([...todos, newTodo]);
    });
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <input
        className="p-10 border border-black bg-green-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ul className="bg-green-500" ref={listRef}>
        {todos.map((todo) => (
          <li
            className="d-flex p-10 m-5 justify-content-center bg-gray-50"
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "Todo #" + (i + 1),
  });
}
