import React from "react";

const DetailTabItem = () => {
  let tabsname = [
    "Domain:",
    "Registrar:",
    "Registered On:",
    "Expires On:",
    "Updated On:",
    "Status:",
    <>
      <br />
      <br />
      <br />
      Name Servers:
    </>,
  ];
  
  let tabdesc = [
    "adobe.com",
    "Nom-iq Ltd. dba COM LAUDE",
    "1986-11-17",
    "2022-05-17",
    "2021-04-17",
    `clientUpdateProhibited
 serverDeleteProhibited
 serverTransferProhibited
 serverUpdateProhibited`,
    `a1-217.akam.net
 a10-64.akam.net
 a13-65.akam.net
 a26-66.akam.net
 a28-67.akam.net
 a7-64.akam.net
 adobe-dns-01.adobe.com
 adobe-dns-03.adobe.com
 adobe-dns-04.adobe.com
 adobe-dns-05.adobe.com`,
  ];

  return (
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-5 col-6">
        {tabsname.map((n, index) => {
          return <p key={index}>{n}</p>;
        })}
      </div>

      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7 col-6">
        {tabdesc.map((d, index) => {
          return <p key={index}>{d}</p>;
        })}
      </div>
    </div>
  );
};

export default DetailTabItem;
