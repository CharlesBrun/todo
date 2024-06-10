'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton } from 'antd';
import Task from '@/components/task';
import FilterBtn from '@/components/filter-btn';
import styles from "./page.module.css";


const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/tarefas/');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {loading ? (
      <Skeleton />
    ) : (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 1rem' }}>
          <FilterBtn />
        </div>
        <Row gutter={[16, 16]} className={styles.task_container}>
          {data.map(item => (
            <Col key={item.id} className={styles.task_item}>
              <Task props={item} />
            </Col>
          ))}
        </Row>
      </>
    )}
  </>
  );
}

export default HomePage;

