import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Input, Space } from "antd";

const { Search } = Input;

const FilterItem = (props) => {
  let { id, name, placholder, list1, list2, list3, list4, list5 } = props;
  return (
    <div>
      <Accordion defaultActiveKey={id}>
        <Accordion.Item eventKey={id}>
          <Accordion.Header>{name}</Accordion.Header>
          <Accordion.Body>
            <Search placeholder={placholder} />

            <div className="mt-3">
              <ListGroup
                as="ol"
                style={{
                  overflowY: "scroll",
                }}
              >
                <ListGroup.Item as="li">
                  <Form.Check type="checkbox" label={list1} />
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Form.Check type="checkbox" label={list2} />
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Form.Check type="checkbox" label={list3} />
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Form.Check type="checkbox" label={list4} />
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Form.Check type="checkbox" label={list5} />
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FilterItem;
