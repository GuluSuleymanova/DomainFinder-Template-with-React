import React from "react";
import { Input, Select, AutoComplete, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
const { Option } = Select;

const SearchInput = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let { pathname } = location;

  return (
    <div
      className={`  searchbar text-start mb-3 ${
        pathname === "/" ? null : "other-searchbar"
      }`}
    >
      <Input.Group className="input_group">
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <Select
            defaultValue="Resources"
            style={{
              width: "100%",
            }}
          >
            <Option value="Option1">Only domain</Option>
            <Option value="Option2">Other options</Option>
          </Select>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16} xl={16}>
          <AutoComplete
            allowClear
            className="autocomplete"
            style={{
              width: "100%",
            }}
            placeholder="Search something..."
            options={[
              {
                value: "Adobe",
              },
              {
                value: "Adobe Photoshop",
              },
              {
                value: "Adobe Illustrator",
              },
              {
                value: "Adobe XD",
              },
            ]}
          ></AutoComplete>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <SearchOutlined
            className="search"
            style={{
              width: "100%",
            }}
            onClick={() => {
              navigate("/results");
            }}
          />
        </Col>
      </Input.Group>
    </div>
  );
};

export default SearchInput;
