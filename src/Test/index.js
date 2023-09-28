import React, { useState, useRef } from 'react';

import Header from './Components/Header';
import Questions from './Components/Questions';
import Footer from './Components/Footer';
import Consts from "./Consts";

const Test = () => {
    const [ run, setRun ] = useState(false);
    const [ answers, setAnswers ] = useState(Array(Consts.questions.length).fill(0));
    const answerRefs = useRef([]);

    return (
        <div className="test">
            <Header />
            <Questions run={run} answers={answers} setAnswers={setAnswers} answerRefs={answerRefs}/>
            <Footer setRun={setRun} answers={answers} answerRefs={answerRefs}/>
        </div>
    );
}

export default Test;
