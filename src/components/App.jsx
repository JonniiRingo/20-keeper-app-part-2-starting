import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"; 

console.log(notes); 

function App() {
  return (
    <div>
      <Header />

      <Note 
        title= "This is the note title"
        content= "This is the note content"
      />

      <Footer />
    </div>
  );
}

export default App;
