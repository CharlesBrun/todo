import React from "react"
import { Card, Row, Col, Divider } from "antd"
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import moment from 'moment';


const Task = ({props}) => {
    const {titulo, tag, data} = props
    const formattedDate = moment(data).format('DD/MM/YYYY HH:mm');

    return (
        <Card
            style={{
                width: 300,
                marginTop: 16,
            }}
            actions={[
                <EyeOutlined key="view"/>,
                <EditOutlined key="edit" />,
                <DeleteOutlined key="delete"/>
            ]}
        >
            <Row>
                
                <Col span={24}>
                    <Divider orientation="center">{titulo?titulo:null}</Divider>
                </Col>
                <Col span={24}>
                {data?formattedDate:"00/00/0000"}
                </Col>
                <Col span={24}>
                {tag?tag:"-"}
                </Col>
            </Row>
        </Card>
    )
}

export default Task