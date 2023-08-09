import React, {useState} from 'react';
import './mainpage.css';
import {PeopleInfo, peoples} from "../data";

interface Statistics {
    birthDuringPeriod: PeopleInfo[]
    deadDuringPeriod: PeopleInfo[]
}


const MainPage = () => {

    const [from, setFrom] = useState<number>(1990);
    const [to, setTo] = useState<number>(2020);
    const [statistics, setStatistics] = useState<Statistics | undefined>();


    return (
        <div className='main'>

            <span>From: </span>
            <input
                type='number'
                value={from}
                onChange={(e) => setFrom(Number.parseInt(e.target.value))}
            />

            <span>To</span>
            <input
                type='number'
                value={to}
                onChange={(e) => setTo(Number.parseInt(e.target.value))}
            />

            <button
                onClick={() => {
                    const statistics : Statistics = {
                        birthDuringPeriod: peoples.filter(p => p.yearOfBirth >= from && p.yearOfBirth <= to),
                        deadDuringPeriod: peoples.filter(p => p.yearOfDeath >= from && p.yearOfDeath <= to),
                    }
                    setStatistics(statistics);
                }}
            >View</button>

            {statistics ?
                (<div>
                    <br />
                    <label>Birth count during period: {statistics.birthDuringPeriod.length}</label>
                    <br />
                    <label>Death count during period: {statistics.deadDuringPeriod.length}</label>
                    <br />


                    <label>People birth during period:</label>
                    <table>

                        {
                            statistics.birthDuringPeriod.map(p => {
                                return (
                                    <tr>
                                        <td>{p.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    <br />

                    <label>People death during period:</label>
                    <table>

                        {
                            statistics.deadDuringPeriod.map(p => {
                                return (
                                    <tr>
                                        <td>{p.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>

                </div>)
                : null}

            
        </div>
    );
};


export default MainPage;