import React from 'react';
import { addDoc, collection } from "firebase/firestore"; 
import {firestore } from "../../Utils/Firebase";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Consts from "../Consts";

const Footer = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={12} className="py-2">
                    <Button 
                        variant={"success"}
                        className="w-100"
                        onClick={async ()=>{
                            props.setRun(true);
                            const zero = props.answers.findIndex( _ => (_ === 0));
                            //console.log(zero);
                            if (zero !== -1) return props.answerRefs.current[zero]?.scrollIntoView();
                            const class_scores = Consts.questions
                                .map((_, idx) => ({ t : _.t, a : props.answers[idx]}))
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
    );
};

export default Footer;


