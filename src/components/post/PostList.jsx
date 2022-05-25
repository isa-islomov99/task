import React, { useState } from "react";
import { Card, Button } from "antd";
import MainModal from "../modal/MainModal";
const { Meta } = Card;

const PostList = (props) => {
  const { name, email, body } = props;
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  return (
    <React.Fragment>
      <MainModal visible={modal} setVisible={setModal} data={body} />
      <Card
        onClick={() => showModal()}
        className="main_card"
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
            className="main_card__image"
          />
        }
      >
        <Meta title={`Name: ${name}`} description={`Email: ${email}`} />
        <Button
          type="primary"
          onClick={() => showModal()}
          style={{ marginTop: "1rem" }}
        >
          Read More
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default PostList;
