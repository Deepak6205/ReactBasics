import React from "react";
import { categoryData } from "../constant";

export const SelectMenu = ({ setSelect }) => {
  return (
    <div>
      <select
        className="category"
        onChange={(e) => {
          setSelect(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option hidden>filter by category</option>

        {categoryData.map((data) => {
          return (
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
