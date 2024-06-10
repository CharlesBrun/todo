"use client"
import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, Radio } from 'antd';

const ModalForm = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    setOpen(false);
  };
  const config = {
    rules: [
      {
        type: 'object',
        required: false,
        message: 'Selecione uma data!',
      },
    ],
  };

    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Adicionar Tarefa
        </Button>
        <Modal
          open={open}
          title="Criar uma nova tarefa"
          okText="Criar"
          cancelText="Cancelar"
          okButtonProps={{
            autoFocus: true,
            htmlType: 'submit',
          }}
          onCancel={() => setOpen(false)}
          destroyOnClose
          modalRender={(dom) => (
            <Form
              layout="vertical"
              form={form}
              name="form_in_modal"
              initialValues={{ modifier: 'ativo' }}
              clearOnDestroy
              onFinish={(values) => onCreate(values)}
            >
              {dom}
            </Form>
          )}
        >
          <Form.Item
            name="title"
            label="Titulo"
            rules={[
              {
                required: true,
                message: 'Porfavor, insira um titulo',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="tag" label="Tag">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Descrição">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="date" label="Data" {...config}>
            <DatePicker showTime format="DD/MM/YYYY HH:mm" />
          </Form.Item>
          <Form.Item name="modifier" label="Status" className="collection-create-form_last-form-item">
            <Radio.Group>
              <Radio value="ativo">Ativo</Radio>
              <Radio value="inativo">Inativo</Radio>
            </Radio.Group>
          </Form.Item>
        </Modal>
      </>
    )
}

export default ModalForm