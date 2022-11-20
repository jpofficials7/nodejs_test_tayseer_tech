import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";

const Record = () => {
    const [record, setRecord] = useState([]);

    async function fetchRecord() {
        try {
            let res = await axios.get("http://localhost:8000/api/transaction/listTransaction");
            setRecord(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRecord();



    }, []);


    return (
        <>
            <h1>Records</h1>
            <h5>List of Transactions</h5>
            <ul>
                {
                    record.map((element, index) => {
                        return <li key={index}>Amount To Send: {element.amountToSend} , Amount Received: {element.amountReceived} , Sender's Name: {element.senderName} , Receiver's Name: {element.receiverName}, Purpose: {element.purpose}</li>
                    })
                }
            </ul>
        </>
    )
}

export default Record;