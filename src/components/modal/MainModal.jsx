import React from "react";
import { Modal } from "antd";

const MainModal = ({ visible, setVisible, data }) => {
  return (
    <React.Fragment>
      <Modal
        title="Additionl Info about post"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <h4 className="modal_description">{data}</h4>
      </Modal>
    </React.Fragment>
  );
};

export default MainModal;
