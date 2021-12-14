import React, { useState } from "react";
import { v4 as uuid } from "uuid";
  
function ItemForm( {items, addNewItem} ) {
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");
  
  function handleNewItemName(event) {
    setNewItemName(event.target.value);
  }

  function handleNewItemCategory(event) {
    setNewItemCategory(event.target.value);
  }

  function onItemFormSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemName, 
      category: newItemCategory
    }

    const newItems = [...items, newItem];

    addNewItem(newItems);
    setNewItemName("");
    setNewItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value = {newItemName} onChange = {handleNewItemName} />
      </label>

      <label>
        Category:
        <select name="category" value = {newItemCategory} onChange = {handleNewItemCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
