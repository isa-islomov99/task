import React from "react";
import { useSelector } from "react-redux";
import PostList from "../post/PostList";
import EmptyCard from "../../page/empty/EmptyCard";
import { Col, Row } from "antd";

const FilterByTag = () => {
  const { tagsData } = useSelector((state) => state.cardItems);

  return (
    <React.Fragment>
      <Row>
        {tagsData?.length > 0 ? (
          tagsData.map((item) => (
            <Col
              key={item.id}
              className="gutter-row"
              xs={24}
              sm={24}
              md={8}
              lg={8}
              xl={6}
            >
              <PostList key={item.id} {...item} />
            </Col>
          ))
        ) : (
          <EmptyCard />
        )}
      </Row>
    </React.Fragment>
  );
};

export default FilterByTag;
