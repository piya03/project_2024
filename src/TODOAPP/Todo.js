import React, { useState } from "react";
import Item from "./Item.js";
import { Container, InputContainer } from "./styled.js";

const Todo = () => {
  const [title, setTile] = useState("");
  console.log("🚀 ~ Todo ~ title:", title);
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null); // State to track which todo is being edited
  console.log("🚀 ~ Todo ~ editingId:", editingId);

  console.log("🚀 ~ Todo ~ todo:", todos);

  function AddTodo(e) {
    if (!title.trim()) return;
    const newTodo = {
      id: Date.now() + Math.random(), // Generate a random ID
      title: title,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTile("");
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      AddTodo();
    }
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((each) => each.id !== id));
  }

  return (
    <Container>
      <h1>TODO APP</h1>
      <InputContainer>
        <input
          placeholder="What's your plan today"
          value={title}
          onChange={(e) => setTile(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button onClick={(e) => AddTodo(e)}>Add</button>
      </InputContainer>
      <ol>
        {todos?.length > 0 ? (
          todos?.map((each) => {
            return (
              <Item
                each={each}
                key={each.id}
                setTodos={setTodos}
                deleteTodo={deleteTodo}
              />
            );
          })
        ) : (
          <span>No todo added yet </span>
        )}
      </ol>
    </Container>
  );
};

export default Todo;
