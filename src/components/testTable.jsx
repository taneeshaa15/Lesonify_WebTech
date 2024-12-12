import React from "react";

const TestTable = ({ testData }) => {


    const formatTime = (timestamp) => {
        const date = new Date(timestamp);

        const options = {
            timeZone: "Asia/Kolkata",
            hour12: true,
        };

        const istTime = date.toLocaleString("en-IN", options);

        return istTime;
    }

    return (
        <div className="container text-center">
            <table className="table">
                <thead>
                    <tr>
                        <th>Test Title</th>
                        <th>Test Score</th>
                        <th>Test Time</th>
                    </tr>
                </thead>
                <tbody>
                    {testData.map((test, index) => (
                        <tr key={index}>
                            <td>{test.testName}</td>
                            <td>{test.testScore}</td>
                            <td>{formatTime(test.createdAt)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TestTable;
