import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Consts from "../Consts";

const Detail = (props) => {
    console.log(props.result);
    const type_info = Consts.types[props.mainType];
    const wings = Consts.wings[props.mainType];
    return (
        <Container>
            <Row className="py-3 text-center">
                <Col xs={12}>
                    <strong className="text-muted"> {type_info.nickname}의 날개 </strong>
                </Col>
                <Col xs={12} className="py-1 px-5">
                    <small style={{ color:"rgba(100, 150, 255, 1)", }}>
                        {props.mainType}({type_info.nickname}) 유형은 <strong>
                            {props.mainType}W{wings[0].wing} </strong>,  <strong>
                                {props.mainType}W{wings[1].wing}</strong> 이 두가지 날개를 가지고 있다.
                   </small>
                </Col>
            </Row>
            {
                Consts.wings[props.mainType].map((_, idx) => (
                    <Row className="py-1 text-center">
                        <Col xs={12}>
                            <strong className="text-muted"> {props.mainType}W{_.wing} </strong>
                        </Col>
                        <Col xs={12} className="pt-1 px-5">
                            <small style={{ color:"rgba(100, 150, 255, 1)", }}>
                                {_.character[0]}<br/>
                                {_.character[1]}
                            </small>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    );
};

export default Detail;

