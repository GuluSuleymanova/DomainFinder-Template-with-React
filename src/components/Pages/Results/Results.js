import { Col, Row } from "antd";
import React from "react";
import { Container } from "reactstrap";
import Filter from "../../Elements/Filter";
import SearchInput from "../../Elements/SearchInput";
import ResultLists from "./ResultLists/ResultLists";

const Results = () => {
  return (
    <Container className="mb-5">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <SearchInput />
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <Filter />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={{ span: 15, offset: 1 }}
          lg={{ span: 15, offset: 1 }}
          xl={{ span: 17, offset: 1 }}
        >
          <div>
            <ResultLists />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
