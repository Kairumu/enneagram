import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Header = (props) => {
    const desc = [
        "에니어그램은 아홉 가지로 이루어진 인간 성격 유형과 유형들의 연광성을 표시한 기하학적 도형이다.",
        "여러 고대 전통의 영적 지혜에 그 뿌리를 두고 있으며 현대 심리학이 이것을 발달 시켰다.",
        "에니어그램의 상징을 현재의 서양으로 가져온 사람이 Gurdjieff 것은 의심의 여지가 없다.",
        "이후 볼리비아의 Ichazo 가 1960년대에 아리카연구소에서 에니어그램 시스템을 기반으로 ",
        "9가지 유형을 개발했고 1970년대에 심리 치료가 Naranjo 에 의해 미국 기독교계에 확산되었다. ",
        "에니어그램의 신비주의적, 종교중심적인 접근법에서 벗어나기 위해 ",
        "1975년 Riso와 Hudson이 Gurdjieff와 Ichazo의 에니어그램을 재정리하여 ",
        "오느날 우리가 흔히 접하는 에니어그램이 탄생하였다."
    ];

    return (
        <Container>
            <Row className="text-center pb-2" style={{fontWeight:"400"}}>
                <Col xs={12} className="py-1" style={{ backgroundColor:"rgba(255, 50, 190, 0.7)", }}>
                    <strong style={{ color:"white", fontSize:"20px", }}> 에니어그램 검사 </strong>
                </Col>
                <Col xs={12} className="py-1" style={{ borderBottom:"3px solid rgba(255, 50, 190, 0.2)",}}>
                    <Card className="w-100" style={{ border:"none", }}>
                        <Card.Body>
                            <Card.Text>
                                <small style={{ fontSize:"12px", }}>
                                    { desc.join(" ") }
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;

