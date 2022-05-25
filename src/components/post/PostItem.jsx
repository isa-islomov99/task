import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import useFetch from "../../functions/useFetch";
import Paginate from "../pagination/Paginate";
import SearchBox from "../search/SearchBox";
import PostList from "./PostList";
import Tag from "../tag/Tag";
import FilterByTag from "../filteredData/FilterByTag";
import Loading from "../loading/Loading";
import EmptyCard from "../../page/empty/EmptyCard";

const PostItem = () => {
  useFetch("http://jsonplaceholder.typicode.com/comments");
  const { data, valueOfTag, tagsData, loading } = useSelector(
    (state) => state.cardItems
  );

  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = data && data.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <React.Fragment>
      <h1 className="page_title">Posts</h1>
      <div className="filter_box_container">
        <SearchBox />
        <Tag />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          {valueOfTag?.length > 0 ? (
            <FilterByTag />
          ) : currentPosts?.length > 0 ? (
            <Row>
              {currentPosts.map((item) => (
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
              ))}
            </Row>
          ) : (
            <EmptyCard />
          )}
          {valueOfTag?.length > 0 || tagsData?.length > 0 ? null : (
            <Paginate
              setPage={setPage}
              pageSize={postPerPage}
              setPostPerPage={setPostPerPage}
              total={data?.length}
              current={page}
            />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default PostItem;
