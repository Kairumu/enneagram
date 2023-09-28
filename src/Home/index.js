import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div className="home">
            <div className="position-relative vh-100 vw-100">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <Card style={{ borderRadius:"0", width:"80vw", maxWidth:"800px", }}>
                        <Card.Body className="p-5">
                            <Card.Title className="fw-bold">한국형 에니어그램 성격 유형검사 (KEPTI)</Card.Title>
                            <Card.Text className="pt-4">
                                <small className="text-muted">
                                    본 검사는 간단한 에니어그램성격유형검사의 문제입니다.
                                    전문성이 필요한 검사를 위해서는 한국에니어그램교육연구소에서 
                                    제공하는 검사를 받으시기 바랍니다.<br/>
                                    <br/>
                                    * 문제 발생 시, <a href="https://github.com/Kairumu/enneagram/issues" target='_blank' rel="noreferrer">
                                        이쪽으로
                                    </a> 연락부탁드립니다.
                                </small>
                            </Card.Text>
                            <Button variant="danger" onClick={() => {window.location.href="/test"}}>
                                검사 시작
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;
