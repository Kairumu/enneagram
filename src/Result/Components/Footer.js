import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
    return (
        <Container>
            <Row className="px-4 text-center">
                <Col xs={12} className="py-1">
                <Button varient={"primary"} className="w-100" 
                    onClick={()=>{
                        const url = window.location.href;
                        const textarea = document.createElement("textarea");
                        document.body.appendChild(textarea);
                        textarea.value = url;
                        textarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textarea);
                        alert("링크가 복사되었습니다. 필요하신 곳에 붙여넣기 하세요!")
                }}> 공유하기 </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
