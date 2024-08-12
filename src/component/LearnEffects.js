import React, { useEffect, useState } from "react";

const LearnEffects = () => {
  const [api, setApi] = useState([]);
  const fetching = async () => {
    const getApiData = await fetch("https://api.escuelajs.co/api/v1/products");
    const getData = await getApiData.json();
    setApi(getData);
    console.log(getData);
  };
  useEffect(() => {
    fetching();
    console.log("hello");
  }, []);
  return (
    <div className="containerCard">
      {api.map((data) => {
        return (
          <div style={{ border: "1px solid red", padding: "8px" }}>
            <img
              src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ height: "150px", width: "150px" }}
            />
            <h3>{data.title.slice(0,5)+'...'}</h3>
            <p>{data.description.slice
                (0,5)+'...'}</p>
            <p>{data.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LearnEffects;
