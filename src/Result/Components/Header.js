import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Consts from "../Consts";

const Header = (props) => {
    const type_info = Consts.types[props.mainType];
    console.log(props.mainGroup.color);
    return (
        <Container>
            <Row className="px-4 text-center" style={{fontWeight:"400"}}>
                <Col xs={12} className="py-1 mb-5" style={{ backgroundColor:props.mainGroup.color, }}>
                    <strong style={{ color:"white", fontSize:"20px", }}> 에니어그램 검사 </strong>
                </Col>
                <Col xs={12}>
                    <strong className="text-muted"> 당신의 enneagram 결과는... </strong>
                </Col>
            </Row>
            <Row className="px-4 text-center" style={{fontWeight:"400"}}>
                <Col xs={12} className="py-3 align-self-center">
                    <img className="card-img" src={`/${props.mainType}.jpg`} alt="" 
                        style={{ width:"100w", maxWidth:"500px", aspectRatio:"1", objectFit:"cover", borderRadius:"100%", }}/>
                </Col>
            </Row>
            <Row className="px-4 text-center" style={{fontWeight:"400"}}>
                <Col xs={12}>
                    <strong style={{ color: props.mainGroup.color }}> {type_info.keyphrase} </strong>
                </Col>
                <Col xs={12}>
                    <strong> {type_info.nickname} </strong>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;

