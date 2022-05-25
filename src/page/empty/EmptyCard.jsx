import React from "react";
import { Empty } from "antd";

const EmptyCard = () => {
  return (
    <div className="empty_card">
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </div>
  );
};

export default EmptyCard;
