import React from "react"
import { useState } from 'react';
import oodata from "./oodata.json"

export default function NNApp() {

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    setSearchTerm(event.target.value)
}

const data = oodata.filter((val) =>
val.name.split(" ").join("").toLowerCase().includes(searchTerm.toLowerCase())
);

    return (
        <>
    <main>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch}/>
        <menu>
          {
            oodata.filter((val) =>{
              if (searchTerm === ""){
                return val;
              } else if (val.name.split(" ").join("").toLowerCase().includes(searchTerm.toLowerCase())){
                return val;}
            }).map((val,key) => {
              return <li key={key}>{val.name}</li>;
            })
          }
        </menu>
        <footer><a href="https://github.com/traez/search-filter-react" target="_blank">https://github.com/traez</a></footer>
    </main>
        </>
    )
}

/*
  setSearchTerm(event.target.value)

<section 
          style={{
        backgroundColor: color
      }}
      >{number}° C</section>
*/