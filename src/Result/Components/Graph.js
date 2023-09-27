import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Consts from "../Consts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Graph = (props) => {

    const labels = [2, 3, 4, 5, 6, 7, 8, 9, 1];
    //const labels = ['2', '3', '4', '5', '6', '7', '8', '9', '1'];
    //Array(10).fill(0).map((_,idx)=>((idx+1)%9)+1).slice(0,9);

    const data = {
        labels: labels,
        datasets: Consts.enneagram_groups.map((_, idx) => ({
            label: _.label,
            data: labels.map(__ => (_.types.includes(__) ? parseInt(props.result[__]?props.result[__]:1) : 0)),
            backgroundColor: _.color,
            stack: 'Stack 0',
        }))
    };

    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} className="text-center text-muted">
                    <strong>  에니어그램 결과 그래프 </strong>
                </Col>
                <Col xs={12}>
                    <Bar
                        style={{ height:"300px", }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { position: 'bottom', },
                            },
                            scales: {
                                y: {
                                    min: 0,
                                    max: 45,
                                    stepSize: 1,
                                },
                            },
                        }}
                        data={data} 
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Graph;
