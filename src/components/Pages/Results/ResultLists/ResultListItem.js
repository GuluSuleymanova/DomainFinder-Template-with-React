import React from "react";
import { Card } from "antd";
import Image from "../../../../assets/img/Image";
import { Link } from "react-router-dom";
import TagButtons from "../../../../libs/Buttons";
export const ResultListItem = (props) => {
  let { id, img, url, titles, description, tags } = props;

  return (
    <Link to={`/results/${id}`}>
      <Card
        title={
          <div className="head-logo">
            <img src={img} alt="" />
            <p>{url}</p>
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
          <h5>{titles}</h5>
          <p>{description}</p>
          <div className="tag_buttons">
            {tags.map((tag, index) => {
              return <TagButtons key={index}>{tag}</TagButtons>;
            })}
          </div>
        </div>
      </Card>
    </Link>
  );
};
