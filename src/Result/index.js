import { useState, useEffect, useCallback }  from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Utils/Firebase";

import Header from './Components/Header';
import Graph from './Components/Graph';
//import GradeTable from './Components/GradeTable';
import Detail from './Components/Detail';
import Wings from './Components/Wings';
import Footer from './Components/Footer';

import Consts from "./Consts";

const Result = (props) => {

    const doc_id = useParams().doc_id;
    const [ result,    setResult_   ] = useState(null);
    const [ mainType,  setMainType  ] = useState(null);
    const [ mainGroup, setMainGroup ] = useState(null);

    const setResult = useCallback(async () => {
        const docRef = doc(firestore, "results", doc_id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) return console.error("No such document!");
        const data = docSnap.data();
        //console.log("Document data:", data);
        const main_type = parseInt(Object.keys(data).reduce((acc, cur) => (data[acc] > data[cur] ? acc : cur)));
        const main_group = Consts.enneagram_groups.filter( _ => { return _.types.includes(main_type);})[0];
        setResult_(data);
        setMainType(main_type);
        setMainGroup(main_group);
        console.log(main_group);
    }, [doc_id, setResult_]);

    useEffect(()=>{
        setResult();
    }, [setResult]);

    return result && (
        <>
            <Header mainType={mainType} mainGroup={mainGroup}/>
            <Detail mainType={mainType} mainGroup={mainGroup}/>
            <Wings  mainType={mainType} mainGroup={mainGroup}/>
            <Graph result={result}/>
            <Footer mainType={mainType} mainGroup={mainGroup}/>
        </>
    );
}

export default Result;
