import React from "react";
import { Col, Row, Card } from "antd";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import TagCards from "../../Elements/DetailTags/TagCards";
import ListData from "../Results/ResultLists/ListData";
import SimilarContent from "../../Elements/SimilarContent";
import DetailRegistrar from "../../Elements/DetailRegistrar";
import DetailTabs from "../../Elements/DetailTabs";

const Detailpage = () => {
  const { idd } = useParams();
  const product = ListData.find((item) => item.id === parseInt(idd));

  return (
    <div className="detail-page mb-5">
      <Container>
        <Row>
          <Col xs={24} sm={24} md={15} lg={16} xl={16}>
            <Card
              title={
                <div className="head-logo">
                  <img src={product.img} alt="" />
                  <p>{product.url}</p>
                </div>
              }
              extra={
                <div className="extra-logo">
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
                <h5>{product.titles}</h5>
                <p>{product.description}</p>
              </div>
            </Card>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <DetailRegistrar/>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <DetailTabs/>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 8, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
            xl={{ span: 7, offset: 1 }}
          >
            <TagCards />
          </Col>
        </Row>
             
            <SimilarContent/>
        
      </Container>
    </div>
  );
};

export default Detailpage;
