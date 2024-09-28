import React, { useState } from "react";
import { ItemContainer, ActionIcons } from "./styled.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit, faL } from "@fortawesome/free-solid-svg-icons";

const Item = ({ each, deleteTodo, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editVal, setEditVal] = useState(each.title);
  console.log("🚀 ~ Item ~ editVal:", editVal);

  function update(id) {
    setTodos((prev) => {
      return prev?.map((elem) =>
        elem.id === id ? { ...elem, title: editVal } : elem
      );
    });
    setIsEdit(false);
  }
  return (
    <>
      {isEdit ? (
        <div>
          <input value={editVal} onChange={(e) => setEditVal(e.target.value)} />
          <button onClick={() => update(each.id)}>Update</button>
        </div>
      ) : (
        <li>
          <ItemContainer key={each.id}>
            <span>{each.title}</span>
            <ActionIcons>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => deleteTodo(each.id)}
              />
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => {
                  setIsEdit((prev) => !prev);
                }}
              />
            </ActionIcons>
          </ItemContainer>
        </li>
      )}
    </>
  );
};

export default Item;
