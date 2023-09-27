import { useState, useRef } from 'react';
import { addDoc, collection } from "firebase/firestore"; 
import {firestore } from "../Utils/Firebase";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import QuestionCard from './QuestionCard';
import Const from "./Const";

const Test = () => {
    const [ run, setRun ] = useState(false);
    const [ answers, setAnswers ] = useState(Array(Const.questions.length).fill(0));
    const answerRefs = useRef([]);

    return (
        <div className="test">
            <Container>
                <Row>
                    {
                        Const.questions.map((_, idx) => {
                            return (
                                <Col key={idx} ref={_ => (answerRefs.current[idx] = _)} xs={12} className="py-1">
                                    <QuestionCard 
                                        q={_.q}
                                        a={answers[idx]}
                                        n={idx+1}
                                        run={run}
                                        setAnswer={(answer)=>{ 
                                            const answers_ = answers;
                                            answers_[idx] = answer;
                                            setAnswers(answers_);
                                        }}/>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Col xs={12} className="py-2">
                        <Button 
                            variant={"success"}
                            className="w-100"
                            onClick={async ()=>{
                                setRun(true);
                                const zero = answers.findIndex( _ => (_ === 0));
                                //console.log(zero);
                                if (zero !== -1) return answerRefs.current[zero]?.scrollIntoView();
                                const class_scores = Const.questions
                                    .map((_, idx) => ({ t : _.t, a : answers[idx]}))
                                    .reduce((acc, cur) => {
                                        if (!acc.hasOwnProperty(cur.t)) acc[cur.t] = 0;
                                        acc[cur.t] += cur.a;
                                        return acc;
                                    }, {});
                                console.log(class_scores); 
                                try {
                                    const docRef = await addDoc(collection(firestore, "results"), class_scores);
                                    window.location.href=`/result/${docRef.id}`;
                                } catch(e) {
                                    console.error("Error adding document: ", e);
                                }
                            }}>
                            제출
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Test;
