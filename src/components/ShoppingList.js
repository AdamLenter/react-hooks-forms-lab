import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  const searchedItems = itemsToDisplay.filter((item) => {
    if (search){ 
      return item.name.toUpperCase().search(search.toUpperCase()) !== -1;
    }
    else {
      return true;
    }
  });

  

  return (
    <div className="ShoppingList">
      <ItemForm items = {itemsToDisplay} addNewItem = {addNewItem} />
      <Filter search = {search} onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange}/>
      <ul className="Items">
        {searchedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
