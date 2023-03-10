import React from "react";
import { Card } from "antd";
import { useState } from "react";
import DetailTabItem from "./DetailTabItem";
const tabList = [
  {
    key: "DomainInformation",
    tab: "DomainInformation",
  },
  {
    key: "RegistrantContact",
    tab: "RegistrantContact",
  },
  {
    key: "AdministrativeContact",
    tab: "AdministrativeContact",
  },
  {
    key: "AdministrativeContac",
    tab: "AdministrativeContac",
  },
];
const contentList = {
  DomainInformation: <DetailTabItem />,
  RegistrantContact: <DetailTabItem />,
  AdministrativeContact: <DetailTabItem />,
  AdministrativeContac: <DetailTabItem />,
};

const DetailTabs = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("DomainInformation");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <div className="my-5">
      <Card
        // style={{
        //   width: '100%',
        // }}
        title="Who is"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
    </div>
  );
};
export default DetailTabs;
