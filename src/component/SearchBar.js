import React, { useState } from "react";


export default function SearchBar(props) {
  // callback function triggered when form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault(); // prevents default form submission
    const searchTerm = event.target.elements.searchTerm.value; // retrieves search term from form input
    props.handleSearch(searchTerm); // calls handleSearch function with search term as argument
  };

  return (
    <div style={styles.bar}> {/* search bar wrapper div with inline styles */}
      <form onSubmit={handleFormSubmit}> {/* form with handleFormSubmit function as submit event handler */}
        <input type="text" placeholder="Search..." name="searchTerm" /> {/* search input */}
        <button type="submit">Search</button> {/* submit button */}
      </form>
    </div>
  );
}

const styles = {
  bar: { display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }
}