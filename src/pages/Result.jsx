import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import the css function
import { ClipLoader } from 'react-spinners'; // Import the specific spinner component
import ChartComponent from '../components/ChartComponent';
import TestTable from 'components/testTable';

const Result = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const location = useLocation();
    const [attempts, setAttempts] = useState(0);
    const [score, setScore] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { title } = location.state;

    useEffect(() => {
        const getData = async () => {
            const result = await fetch('https://better-flannel-nightgown-bull.cyclic.app/api/getScore', {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ testUser: user._id, testName: title }),
            });

            const response = await result.json();

            setAttempts(response?.score?.length);

            const scoreData = response?.score?.map((res) => {
                return res.testScore.toFixed(2);
            });

            setScore(scoreData);
            setData(response.score);
            setIsLoading(false);
        };

        getData();
    }, []);

    return (
        <div className="">
            <h2 className="text-center mt-100">{title.toUpperCase()} REPORTS</h2>
            {isLoading ? (
                // Render the ClipLoader from react-spinners while loading
                <div className="loader text-center">
                    <ClipLoader  size={50} color={'black'} loading={isLoading} />
                </div>
            ) : (
                <>
                    {score.length > 0 && <ChartComponent scores={score} numberOfAttempts={attempts} />}
                    <div>
                        <TestTable testData={data} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Result;
