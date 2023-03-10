import React from "react";
import { Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Dropdown = () => (
  <div className="dropdown-ant">
    <Select
      defaultValue="EN"
      style={{
        width: 65,
      }}
      onChange={handleChange}
      options={[
        {
          value: "RU",
        },
        {
          value: "AZ",
        },
        {
          value: "EN",
        },
      ]}
    />
  </div>
);
export default Dropdown;
