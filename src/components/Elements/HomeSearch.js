import React from "react";
import { Col, Row } from "antd";
import { Container } from "reactstrap";
import { SubTitle, Title } from "../../libs/Title";
import SearchInput from "./SearchInput";
import HomeTags from "./HomeTags";

const HomeSearch = () => {
  return (
    <div className="home-section1">
      <Container>
        <Row className="d-flex align-items-center justify-content-center text-center">
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <Title>Use Domain Finder to find unique domains!</Title>
            <SubTitle clasname="mb-5">
              Millions of people are searching for companies, domains, meta
              tags, company names and etc., on Domain finder. Try today!
              <strong> 1 000 000</strong> data for your search.
            </SubTitle>
            <SearchInput />
            <HomeTags />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSearch;
