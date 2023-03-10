import { Col, Row, Card } from "antd";
import React from "react";
import { Container } from "reactstrap";
import Image from "../../assets/img/Image";
import TagButtons from "../../libs/Buttons";

const SimilarContent = () => {
  let similar = [
    {
      id: 1,
      img: `${Image.adobe}`,
      url: "https://www.adobe.com",
      titles: "Adobe: Creative, marketing and document management ...",
      description:
        " Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
      tags: [
        "adobe",
        "design",
        "creative",
        "designer",
        "photoshop",
        "illustrator",
      ],
    },
    {
      id: 2,
      img: `${Image.adobe}`,
      url: "https://www.adobe.com",
      titles: "Adobe: Creative, marketing and document management ...",
      description:
        " Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
      tags: [
        "adobe",
        "design",
        "creative",
        "designer",
        "photoshop",
        "illustrator",
      ],
    },
    {
      id: 3,
      img: `${Image.adobe}`,
      url: "https://www.adobe.com",
      titles: "Adobe: Creative, marketing and document management ...",
      description:
        " Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
      tags: [
        "adobe",
        "design",
        "creative",
        "designer",
        "photoshop",
        "illustrator",
      ],
    },
  ];

  return (
    <>
      <h4>Similar content</h4>

      <Row gutter={[32, 32]}>
        {similar.map((item, index) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={8}
              lg={8}
              xl={8}
              key={index}
              className="similar"
            >
              <Card
                title={
                  <div className="head-logo">
                    <img src={item.img} alt="" />
                    <p>{item.url}</p>
                  </div>
                }
                extra={
                  <div className="extra_logo">
                    <img src={Image.logoa} alt="" />
                    <div className="local">
                      <h5>3.5</h5>
                      <p>Local rating</p>
                    </div>

                    <div className="local">
                      <h5>5.0</h5>
                      <p>Global rating</p>
                    </div>
                  </div>
                }
              >
                <div className="card-body">
                  <h5>{item.titles}</h5>
                  <p>{item.description}</p>
                  <div className="tag_buttons">
                    {item.tags.map((tag, index) => {
                      return <TagButtons key={index}>{tag}</TagButtons>;
                    })}
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default SimilarContent;
