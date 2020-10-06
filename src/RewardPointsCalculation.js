import React from "react";
import "./App.css";
import { transactionData } from "./data";


export const RewardPointsCalculation = () => {
    const getRewardPoints = (amountSpent) => {
        let points = 0;
        let rewardAmount = Number(amountSpent.toString().replace(/[$ ]/, ''));
        if (rewardAmount >= 50) {
            rewardAmount = rewardAmount - 50;
            if (rewardAmount > 50) {
                // 1 point for every dollar between $51 to $100
                points += 50;
                // 2 point for every dollar spent from $101
                points += ((rewardAmount - 50) * 2);
            } else {
                // 1 point for every dollar between $51 to $100
                points += rewardAmount;
            }
        }
        return points;
    }
    return (
        <>
            <HomePageHeader />
            <div className="rp-container">
                <table style={{ borderCollapse: 'collapse', }}>
                    <thead>
                        <tr style={{ backgroundColor: '#D3D3D3'}}>
                            {/* <th>ID</th> */}
                            <th>Name</th>
                            <th>Transaction Date</th>
                            <th>Amount Spent</th>
                            <th>Reward Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactionData.map((item, index) => (
                                <tr key={index}>
                                    {/* <td>{item.customerID}</td> */}
                                    <td>{item.name}</td>
                                    <td>{item.transactionDt}</td>
                                    <td>{item.amountSpent}</td>
                                    <td>{getRewardPoints(item.amountSpent)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

const HomePageHeader = () => {
    return (
        <header className="header">
            {/* <header> */}
            <h3 id='title'>Reward Points For Customer Transactions</h3>
        </header>

    );
};
