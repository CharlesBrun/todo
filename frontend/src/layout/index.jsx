"use client"
import React from "react";
import { Button, Layout, Typography, theme } from 'antd';
import styles from "./layout.module.css";


const { Header, Content, Footer } = Layout;

export default function Design({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
        <Content
            style={{
            padding: '0 48px',
            }}
        >
            <Header className={styles.header_main}>
                <Typography.Title 
                className={styles.header_main__title}
                >
                Tarefas
                </Typography.Title>
                <Button
                type="primary"
                >
                Adicionar Tarefa
                </Button>
            </Header>
            <div
            style={{
                background: colorBgContainer,
                minHeight: 280,
                padding: 24,
                borderRadius: borderRadiusLG,
            }}
            >
            {children}
            </div>
        </Content>
        <Footer
            style={{
            textAlign: 'center',
            }}
        >
            Created by Charles
        </Footer>
    </Layout>
  );
}


