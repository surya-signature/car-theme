'use client'

import React from 'react';
import { BiSolidOffer } from 'react-icons/bi';
import { FaCar, FaUser  } from 'react-icons/fa';
import { Card, Col, Row } from 'antd';
import Cards from '../../dashboard-components/Cards';
import Header from './Header';

const MainDashboard = () => {
  return (
    <div className='p-4  dark:bg-black bg-[#f9fafc] ' style={{boxShadow: '#f4f5f8' }}>
      <Header/>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} style={{marginTop:'1rem'}}>
          <Card bordered={false} className='dark:bg-[#292e37] dark:text-[#FFFFFFCC]'>
            <div className='flex justify-between'>
              <p className="text-lg text-[#767676] dark:text-[#FFFFFFCC]">Total Customers</p>
              <div style={{ padding: '8px', backgroundColor: '#43B9B21A' }}>
                <FaUser  className='text-[24px] mr-2' style={{ color: '#43b9b2' }} />
              </div>
            </div>
            788
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} style={{marginTop:'1rem'}}>
          <Card bordered={false} className='dark:bg-[#292e37] dark:text-[#FFFFFFCC]'>
            <div className='flex justify-between'>
              <p className="text-lg text-[#767676] dark:text-[#FFFFFFCC]" >Total Vehicles</p>
              <div style={{ padding: '8px', backgroundColor: '#c280d230' }}>
                <FaCar className='text-[24px] mr-2' style={{ color: '#c280d2' }} />
              </div>
            </div>
            234
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} style={{marginTop:'1rem'}}>
          <Card bordered={false} className='dark:bg-[#292e37] dark:text-[#FFFFFFCC]'>
            <div className='flex justify-between'>
              <p className="text-lg text-[#767676] dark:text-[#FFFFFFCC]">Total Sale</p>
              <div style={{ backgroundColor: '#fd7e4030', padding: '8px', alignItems: 'center' }}>
                <BiSolidOffer className='text-[24px] mr-2' style={{ color: '#fd7e40' }} />
              </div>
            </div>
            3456
          </Card>
        </Col>
      </Row>

      <div className='mt-8'>
        <Cards />
      </div>
    </div>
  );
}

export default MainDashboard;