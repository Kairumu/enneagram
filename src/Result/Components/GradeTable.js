import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Consts from "../Consts";

const GradeTable = (props) => {
    return (
        <Container>
            <Row className="px-4">
                {
                    Consts.enneagram_groups.map((_, idx) => {
                        return (
                            <Col key={idx} xs={4} md={4} className="py-1" >
                                <Row className="text-center">
                                    <Col xs={12} className="p-0">
                                        <Card style={{ borderRadius:"0", }}>
                                            <strong> <small> { _.label } </small> </strong>
                                        </Card>
                                    </Col>
                                    {
                                        _.types.map((__, idx) => {
                                            return (
                                                <Col key={idx} xs={4} className="p-0">
                                                    <Card style={{ borderRadius:"0", }}>
                                                        <small> { __ } </small>
                                                    </Card>
                                                </Col>
                                            )
                                        })
                                    }
                                    {
                                        _.types.map((__, idx) => {
                                            return (
                                                <Col key={idx} xs={4} className="p-0">
                                                    <Card style={{ borderRadius:"0", }}>
                                                        <small> { props.result[__] ? props.result[__] : 1 } </small>
                                                    </Card>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default GradeTable;
