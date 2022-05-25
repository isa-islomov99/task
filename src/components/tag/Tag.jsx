import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { filterPostsByTag, setValuesOfTag } from "../../redux/item/itemAction";
const { Option } = Select;
const children = [];

const Tag = () => {
  const { data } = useSelector((state) => state.cardItems);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 10; i < data?.length; i++) {
      children.push(data[i].email);
    }
  }, [data]);

  const handleChange = (value) => {
    dispatch(dispatch(setValuesOfTag(value)));
    const filteredPost = [];
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      data.forEach((list) => {
        if (list.email === element) {
          filteredPost.push(list);
        }
      });
    }
    dispatch(dispatch(filterPostsByTag(filteredPost)));
  };

  return (
    <div className="filter_by_tag">
      <Select
        mode="tags"
        style={{
          width: "100%",
        }}
        placeholder="Filter by Email using tag"
        onChange={handleChange}
      >
        {children?.length > 0 &&
          children.map((child, i) => <Option key={child}>{child}</Option>)}
      </Select>
    </div>
  );
};

export default Tag;
