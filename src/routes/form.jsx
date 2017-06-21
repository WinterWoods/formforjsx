import React from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;

export default class testForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }
    componentDidMount() {
        //渲染后执行
        this.props.form.setFieldsValue(this.props.formData);

    }
    handleSubmit() {
        var self = this;
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!', errors);
                return;
            }
            this.setState({ confirmLoading: true });
            this.props.okAdd();
        });
    }
    handleCancel() {
        this.props.cancel();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 10 }
        };

        return (<Modal title={"单位信息编辑"}
            visible={this.props.visible}
            width={600}
            onOk={this.handleSubmit.bind(this)}
            onCancel={this.handleCancel.bind(this)}
            confirmLoading={this.state.confirmLoading}
        >
            <Form Form={this.props.form}>
                <FormItem
                    {...formItemLayout}
                    label="单位名称：">
                    {getFieldDecorator('Name', {
                        rules: [
                            { required: true, message: '单位名称' },
                        ]
                    })(<Input type="text" autoComplete="off" />)}
                </FormItem>
            </Form>

        </Modal>);
    }
}
testForm.propTypes = {

};
testForm.defaultProps = {
    visible: false,
    formData: {},
    OrgTitle: "",
    okAdd: function () { },
    cancel: function () { }
};