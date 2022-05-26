import React from "react";
import { Pagination } from "antd";

const Paginate = ({ setPage, pageSize, setPostPerPage, total, current }) => {
  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize);
  };

  const onChangeSize = (value) => {
    setPage(value);
    window.scrollTo(190, 70);
  };

  return (
    <div className="pagination">
      <Pagination
        onChange={(value) => onChangeSize(value)}
        current={current}
        pageSize={pageSize}
        hideOnSinglePage={true}
        total={total}
        onShowSizeChange={onShowSizeChange}
      />
    </div>
  );
};

export default Paginate;
