import { Col, Row } from "antd";
import React from "react";
import { Container } from "reactstrap";
import Image from "../../assets/img/Image";
import { Title, SubTitle } from "../../libs/Title";

const SomeSection = () => {
  return (
    <div className="some-section">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={24} sm={24} md={14} lg={14} xl={13}>
            <Title>Use Domain Finder to find unique domains!</Title>
            <SubTitle>
              Millions of people are searching for companies, domains, meta
              tags, company names and etc., on Domain finder. Try today!{" "}
              <strong> 1 000 000</strong> data for your search.
            </SubTitle>

            <div className="number-arrow">
              <div className="one">
                <p>
                  <span>1</span> Type to search
                </p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="one">
                <p>
                  <span>2</span> Find domains
                </p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="one">
                <p>
                  <span>3</span> Filter them
                </p>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 9, offset: 1 }}
            lg={{ span: 9, offset: 1 }}
            xl={{ span: 9, offset: 2 }}
          >
            <div className="image mt-3">
              <img src={Image.svgimg} alt="" width="100%" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SomeSection;
