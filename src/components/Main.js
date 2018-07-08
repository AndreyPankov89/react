import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

import Slider from './Slider'

const Repair = styled.div`
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    
    span{
        display: block;
        font-size: 24px;
        line-height:30px
    }
`
const LightText = styled.div`
    font-size: 18px;
    font-weight:300;
    color: #fff;
    line-height: 28px;
    margin-top: 50px

`


const CallButton = styled.button`
    width: 247px;
    height: 67px;
    background-color: #ffa14b;
    border-radius: 50px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-top: 50px
`



class Main extends Component{
    render(){
        return (
            <Row>
                <Col lg={5}>
                    <Repair>
                        Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>
                        Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </LightText>
                    <CallButton> Оставить заявку </CallButton>
                </Col>
                <Col lgOffset={1} lg={6}>
                    <Slider/>
                </Col>
            </Row>
        );
    }
}

export default Main;