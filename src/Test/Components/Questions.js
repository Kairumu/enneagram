import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionCard from './QuestionCard';
import Consts from "../Consts";

const Questions = (props) => {
    return (
        <Container>
            <Row>
                {
                    Consts.questions.map((_, idx) => (
                        <Col key={idx} 
                            ref={_ => (props.answerRefs.current[idx] = _)} xs={12} className="py-1">
                            <QuestionCard 
                                q={_.q}
                                a={props.answers[idx]}
                                n={idx+1}
                                run={props.run}
                                setAnswer={(answer)=>{ 
                                    const answers = props.answers;
                                    answers[idx] = answer;
                                    props.setAnswers(answers);
                                }}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Questions;
