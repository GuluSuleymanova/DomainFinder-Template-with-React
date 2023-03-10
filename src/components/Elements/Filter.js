import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import FilterItem from "./FilterItem";

const Filter = () => {
  let [filteritem, setFilterItem] = useState([
    {
      id: 1,
      name: "Company Sector",
      placholder: "Search sector",
      list1: "Adminstrative",
      list2: "Arts & Design",
      list3: "Business",
      list4: "Consulting",
      list5: "Customer Services & Support",
    },
    {
      id: 2,
      name: "Country",
      placholder: "Search sector",
      list1: "Worldwide",
      list2: "United States",
      list3: "Azerbaijan",
      list4: "Russia",
      list5: "Turkey",
    },
    {
      id: 3,
      name: "Metatags",
      placholder: "Search metatag",
      list1: "Metatag 1",
      list2: "Metatag 2",
      list3: "Metatag 3",
      list4: "Metatag 4",
      list5: "Metatag 5",
    },
    {
      id: 4,
      name: "Alexapoints",
      placholder: "Search points",
      list1: "5 star",
      list2: "4 star",
      list3: "3 star",
      list4: "2 star",
      list5: "1 star",
    },
    {
      id: 5,
      name: "Colors",
      placholder: "Search color",
      list1: "Green",
      list2: "Red",
      list3: "Yellow",
      list4: "Blue ",
      list5: "White",
    },
  ]);

  return (
    <Accordion className="mb-4">
      <Accordion.Item>
        <Accordion.Header>
          <p>FILTERS</p>
        </Accordion.Header>
        <Accordion.Body>
          <div className="row gy-3">
            {filteritem.map((filter, index) => {
              return <FilterItem key={index} {...filter} />;
            })}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Filter;
