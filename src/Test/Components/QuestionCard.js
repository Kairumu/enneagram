import { useState }  from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Consts from "../Consts";

const QuestionCard = (props) => {
    const [ answer, setAnswer ] = useState(props.a);
    return (
        <Card className="w-100">
            <Card.Body className="p-3">
                <Card.Text className={answer !== 0 ? "text-success" : props.run ? "text-danger" : ""}>
                    {props.n}. {props.q}
                </Card.Text>
                <Form className="mb-3">
                    {
                        Array(5).fill(0).map((_, idx) => {
                            const score = idx+1;
                            return (
                                <Form.Check
                                    key={idx}
                                    name={`group-${props.n}`}
                                    style={{ fontSize:"12px", }}
                                    inline type="radio"
                                    label={Consts.answers[idx]}
                                    id={`group-${props.n}-${idx}`}
                                    defaultChecked={answer === score}
                                    onClick={()=>{ setAnswer(score); props.setAnswer(score); }}
                                />
                            );
                        })
                    }
                </Form>
            </Card.Body>
        </Card>
    );
}

export default QuestionCard;
