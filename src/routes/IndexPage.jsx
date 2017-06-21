import React from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;

import testForm from './form';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      formData: {}
    }
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  EditFormCancl = () => {
    this.setState({ visible: false });
  }
  EditFormOK = () => {
    this.setState({ visible: true });
  }
  render() {
    const UserEditForm = Form.create({})(testForm);
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>点击我出现Warning</Button>
        <UserEditForm
          visible={this.state.visible}
          formData={this.state.formData}
          cancel={this.EditFormCancl}
          okAdd={this.EditFormOK}
        />
      </div>
    );
  }
}

Test.propTypes = {
};

