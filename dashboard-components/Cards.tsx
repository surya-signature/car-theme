'use client';
import { Card, Col, Divider, Row } from 'antd';
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const Cards = () => {
  useEffect(() => {
    // Chart options
    const options1 = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [70, 55, 40],
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: 'TOTAL',
            },
          },
        },
      },
      labels: ['TEAM A', 'TEAM B', 'TEAM C'],
      colors: ['#43b9b2', '#c280d2', '#fd7e40']
    };

    // Create a new chart instance
    const chart = new ApexCharts(document.querySelector("#chart1"), options1);
    chart.render();

    // Cleanup function to destroy the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <Row gutter={16}>
      <Col xs={24} sm={16} md={16} lg={16} >
        <Card bordered={false} className='dark:bg-[#292e37] dark:text-[#FFFFFFCC] text-[#767676] text-sm'>
          <h1 className='text-[#3d3d47] text-lg mb-8'>Top Selling Product</h1>
          <div className='flex justify-between '>
            <p>Product Name</p>
            <p >Amount</p>
            <p>Payment</p>
          </div>
          <Divider variant="dashed" style={{ borderColor: '#767676' }} dashed />
          <div className='flex justify-between'>
            <p>Product Name</p>
            <p>Amount</p>
            <p >Payment</p>
          </div>
          <Divider variant="dashed" style={{ borderColor: '#767676' }} dashed />
          <div className='flex justify-between'>
            <p >Product Name</p>
            <p>Amount</p>
            <p>Payment</p>
          </div>
        </Card>
      </Col>

      <Col xs={24} sm={8} md={8} lg={8}>
        <Card bordered={false} className='dark:text-[#FFFFFFCC] text-[#767676] dark:bg-[#292e37]'>
          <h1>Category Overview</h1>
          <div id="chart1" className='dark:text-[#FFFFFFCC] h-[280px]'></div>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;