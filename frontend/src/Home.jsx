import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

const Home = () => {
    let [amountToSend, setAmountTosend] = useState(0);
    let [amountReceived, setAmountReceived] = useState(0);
    let [senderName, setSenderName] = useState("");
    let [receiverName, setReceiverName] = useState("");
    let [purpose, setPurpose] = useState("");
    let [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        fetchPurpose();
    }, [])
    async function fetchPurpose() {
        try {
            let res = await axios.get("http://localhost:8000/api/transaction/purpose");
            setPurpose(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    async function exchangedRate() {
        try {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            };
            let rawData = await axios.post("http://localhost:8000/api/transaction/exchangeRate", { amountSend: amountToSend }, axiosConfig);
            let data = rawData.data;
            let { calculatedRate } = data;
            console.log(calculatedRate);
            setAmountReceived(calculatedRate);

        } catch (error) {
            console.log(error);
        }

    }

    function amountToSendHandler(event) {
        setAmountTosend(event.target.value);

    }

    function amountBlurHandler(event) {
        setTimeout(() => {
            exchangedRate();
        }, 2000);
    }

    function senderNameHandler(event) {
        setSenderName(event.target.value);
    }
    function receiverNameHandler(event) {
        setReceiverName(event.target.value);
    }
    function purposeHandler(event) {
        setPurpose(event.target.value);
    }
    async function onSubmitHandler(event) {

        try {
            event.preventDefault();
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            };
            let res = await axios.post("http://localhost:8000/api/transaction/saveTransaction", { amountToSend, amountReceived, senderName, receiverName, selectedValue }, axiosConfig);
            console.log(res);
            setAmountTosend("");
            setAmountReceived("");
            setSenderName("");
            setReceiverName("");

        } catch (error) {
            console.log(error);
        }
    }
    function selectChangeHandler(event) {
        setSelectedValue(event.target.value);
    }


    return (
        <>
            <div>
                <form onSubmit={onSubmitHandler} >
                    <label>
                        Amount To Send:
                        <input type="number" value={amountToSend} onChange={amountToSendHandler} onBlur={amountBlurHandler} />
                    </label>
                    <br />
                    <label>
                        Amount Received:
                        <input type="number" value={amountReceived} />
                    </label>
                    <br />
                    <label>
                        Sender's Name:
                        <input type="text" value={senderName} onChange={senderNameHandler} />
                    </label>
                    <br />
                    <label>
                        Receiver's Name:
                        <input type="text" value={receiverName} onChange={receiverNameHandler} />
                    </label>
                    <br />
                    <label>
                        Purpose:
                        <select name="dropdown" value={selectedValue} onChange={selectChangeHandler}>
                            <option value={purpose[0]}>schoolFees</option>
                            <option value={purpose[1]}>collegeFees Money</option>
                            <option value={purpose[2]}>rent</option>
                            <option value={purpose[3]}>otherExpenditure</option>
                        </select>
                    </label>
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </>
    )
}

export default Home;