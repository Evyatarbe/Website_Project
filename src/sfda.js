import './App.css';
import React, { useState } from "react";
import SearchBar from './component/SearchBar';


export default function App() {

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
  };

  return (
    <div width="100%" height='100%'>

      <div style={styles.login}>
      </div>

      <div style={styles.logo}>
        <img src={require("./assets/logos/logo.png")} width="100%" />
      </div>

      <SearchBar handleSearch={handleSearch} />
      { }

      <div style={styles.cat}>
        <div style={{ ...styles.one, }}>  <p style={styles.graph}>Latest Uploads </p>   </div>
        <div style={{ ...styles.two, }}> <p style={styles.graph}>Recent Dub</p> </div>
        <div style={{ ...styles.three, }}> <p style={styles.graph}>Popular Anime</p>  </div>
      </div >

    


    </div>
  );
}



const styles = {
  logo: { height: 70, width: 120, backgroundColor: "grey", },
  cat: { marginTop: 20, height: 50, width: "100%", backgroundColor: "pink", display: "flex", },
  one: { display: "flex", width: '33%', backgroundColor: 'grey', justifyContent: "center", alignItems: "center" },
  two: { display: "flex", width: '33%', backgroundColor: 'green', justifyContent: "center", alignItems: "center" },
  three: { display: "flex", width: '34%', backgroundColor: 'blue', justifyContent: "center", alignItems: "center" },
  graph: { color: 'black', fontFamily: 'Ariel', textAlign: 'center' },
  login: { display: 'flex', backgroundColor: 'red', height: 134, width: 250, alignItems: "flex-end", justifyContent: "flex-end", position: 'absolute', top: 0, right: 0, },
  cat1: { marginTop: 20, height: 100, width: '25%', backgroundColor: "yellow", display: "flex", flexDirection: 'column', justifyContent: 'space-around',alignItems: 'center',justifyContent: 'center' }
}









