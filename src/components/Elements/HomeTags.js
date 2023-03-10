import React from "react";
import TagButtons from "../../libs/Buttons";

const HomeTags = () => {
  let items = [
    {
      item: "development",
    },
    {
      item: "agile",
    },
    {
      item: "design",
    },
    {
      item: "finance",
    },
    {
      item: "startup",
    },
    {
      item: "delivery",
    },
  ];

  return (
    <div className="tag-group">
      <p>Top searches: </p>
      <div className="btn-groups">
        {items.map((ite, index) => {
          return <TagButtons key={index}>{ite.item}</TagButtons>;
        })}
      </div>
    </div>
  );
};

export default HomeTags;
