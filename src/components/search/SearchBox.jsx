import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import axios from "axios";
import ErrorHandler from "../error/ErrorHandler";
import { saveDataToStore } from "../../redux/item/itemAction";
const { Search } = Input;

const SearchBox = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      setPosts(res.data);
    });
  }, []);

  const onSearch = (value) => {
    if (value) {
      const filteredPosts = posts.filter((list) =>
        list?.name.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(dispatch(saveDataToStore(filteredPosts)));
    } else {
      ErrorHandler("Please Fist Input!");
      dispatch(dispatch(saveDataToStore(posts)));
    }
  };

  return (
    <div className="search_box">
      <Search placeholder="Input search text" onSearch={onSearch} enterButton />
    </div>
  );
};

export default SearchBox;
