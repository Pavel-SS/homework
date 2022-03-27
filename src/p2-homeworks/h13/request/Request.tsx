import React, {useState} from "react";
import requestAPI from "../RequestAPI";
import s from './Request.module.scss'

const Request = () => {

    const [checkStatus, setCheckStatus] = useState(false)
    const [requested, setRequested] = useState('Make it request')

    const sendRequest = (checkStatus: boolean) => {
        requestAPI.post(checkStatus).then(data => {
                setRequested(data)
            }
        )
    }

    return (
        <div>
            <div className={s.input}>
                <input  type="checkbox" name="input"  onClick={() => setCheckStatus(!checkStatus)}/> 
            <label htmlFor="input">Change status</label>
            </div>
            <button className={s.btn} onClick={() => sendRequest(checkStatus)}>REQUEST</button>
            {requested}
        </div>
    )
}

export default Request;