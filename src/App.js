import React, { useState } from 'react';

function App() {
    const [data, setData] = useState([]);

    const handleButtonClick = function() {
      fetch('http://localhost:3000/web')
      .then((response)=>response.json())
      .then((result)=>{
        console.log('Fetched data:', result);
        localStorage.setItem("result", JSON.stringify(result));
        setData(result);
      })
      .catch(()=>{
        alert("fetch error!");
      })
    };



    return (
        <div>
            <button onClick={handleButtonClick}>INU</button>
            <div id="output">
                {data.map((item, index) => (
                    <p key={index}>Class: {item.class}</p>
                ))}
            </div>
        </div>
    );
}

export default App;
