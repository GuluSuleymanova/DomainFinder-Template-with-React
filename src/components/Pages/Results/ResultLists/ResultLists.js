import React from "react";
import ListData from "./ListData";
import { ResultListItem } from "./ResultListItem";

const ResultLists = () => {
  return (
    <div className=" row gy-3">
      <div className="d-flex">
        <p>Showing: 599 filtered domains</p>
        <p className="ms-auto">Sort by : Relevance</p>
      </div>

      {ListData.map((result) => {
        return <ResultListItem key={result.id} {...result} />;
      })}
    </div>
  );
};

export default ResultLists;
