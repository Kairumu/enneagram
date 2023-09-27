import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Consts from "../Consts";

const Detail = (props) => {
    console.log(props.result);
    const type_info = Consts.types[props.mainType];
    return (
        <Container>
            <Row className="py-3 text-center">
                <Col xs={12}>
                    <strong className="text-muted"> 대표 키워드 </strong>
                </Col>
                <Col xs={12}>
                    {
                        [ 
                            ...type_info.characteristics, 
                            type_info.evasion, type_info.trap, 
                            type_info.weakness, type_info.strongness
                        ].map((_, idx) => (
                            <Button key={idx} varient={"primary"} size={"sm"} 
                        className="px-2 py-1 my-1 me-1" style={{ 
                                fontWeight:"bold",
                                backgroundColor: `${props.mainGroup.color.slice(0, -2)}7)`,
                                border : `1px solid ${props.mainGroup.color.slice(0, -2)}9)`,
                                borderRadius:"0.2rem",
                                color : "white"
                            }} disabled> { _ } </Button>
                        ))
                    }
                </Col>
            </Row>
            <Row className="py-3 text-center">
                <Col xs={12} className="py-3">
                    <strong className="text-muted"> 유형 장단점 </strong>
                </Col>
                <Col xs={12} className="py-1 px-5">
                    <small style={{ color:"rgba(100, 150, 255, 1)", }}>
                        { Consts.type_pros_cons[props.mainType].pros }
                    </small>
                </Col>
                <Col xs={12} className="py-1 px-5">
                    <small style={{ color:"rgba(255, 100, 120, 1)", }}>
                        { Consts.type_pros_cons[props.mainType].cons }
                    </small>
                </Col>
            </Row>
            <Row className="py-3 text-center">
                <Col xs={12} className="py-3">
                    <strong className="text-muted"> 유형 설명 </strong>
                </Col>
                <Col xs={12} className="py-2 px-5">
                    <small>
                        { Consts.type_detail[props.mainType] }
                    </small>
                </Col>
                <Col xs={12} className="py-2 px-5">
                    <small>
                        {props.mainType}번 유형(<strong>{type_info.nickname}</strong>)은 이상적인 모습을 이루기 위해서 <strong>
                            {type_info.evasion}</strong>을(를) 회피하려하고 간혹 <strong>
                                {type_info.trap}</strong>(이)란 함정에 빠지기도 한다. 또한 <strong>
                                    {type_info.weakness}</strong>(이)란 분열(약점)을 지니고 있으며 <strong>
                                        {type_info.strongness}</strong>(이)란 통합(강점)을 가지고 있다. 
                    </small>
                </Col>
                <Col xs={12} className="py-2 px-5">
                    <small>
                        이 유형이 성장하기 위해선 다음과 같은 전략을 추구해야한다.<br/>
                        {
                            type_info.growth_strategy.map((_, idx) => (
                                <>
                                    <strong>
                                        {_}
                                    </strong>
                                    <br/>
                                </>
                            ))
                        }
                    </small><br/>
                </Col>
            </Row>
        </Container>
    );
};

export default Detail;
