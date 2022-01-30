
import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

import './Style.scss'

type RotationType = {
    hourRotate: number
    minuteRotate: number
    secondRotate: number
}
function AlternativeClock(){
    const [timerId, setTimerId] = useState<number>(0)
    const [num, setNum] = useState<Array<number>>([]);
    const [rotation, setRotation] = useState<RotationType>({
       secondRotate: 0, 
       minuteRotate: 0,
       hourRotate: 0,
    })
        const arrNum = [];
        for(let i = 1; i <= 12; i++){
            arrNum.push(i);  
        }
        if (num.length === 12){
            setNum(arrNum)
        }
       const clockNum = arrNum.map(item => {
           let n = +item
         return (<div className={'number'+' '+'number'+String(n)}>{item}</div>)
        })


        const stop = () => {
            clearInterval(timerId)
            setTimerId(0)
        }
        const start = () => {
            stop();
            const id: number = window.setInterval(()=> {
                runArrowClock()
            }, 1000);
            setTimerId(id);
        }
        // useEffect(()=> {
        //     window.setInterval(()=> {
        //         runArrowClock()
        //     }, 1000)
        // }) 

        const runArrowClock = ()=> {
        let secondRotatet = new Date().getSeconds() / 60; 
        let minuteRotatet = (secondRotatet + new Date().getMinutes()) / 60;
        let hourRotatet = (minuteRotatet + new Date().getHours()) / 12;
        setRotation({
            secondRotate: secondRotatet,
            minuteRotate: minuteRotatet,
            hourRotate: hourRotatet
        }) 
        }
             
        const Cl = (secondRotate: {}, minuteRotate: {}, hourRotate: {})=> {
            return (<>
                <div className={'hand' + ' ' + 'hour'}  style={{transform: `translate(-50%) rotate(${rotation.hourRotate * 360}deg)`}}></div>
                <div className={'hand'+ ' ' + 'minute'} style={{transform:`translate(-50%) rotate(${rotation.minuteRotate * 360}deg)`}}></div>
                <div className={'hand' + ' ' + 'second'} style={{transform:`translate(-50%) rotate(${rotation.secondRotate * 360}deg)`}}></div>
            </>)
        }
        console.log(rotation.secondRotate)
    return (
        <div >
            <div style={{display: `${timerId !== 0 ? 'none' : 'block'}`}} className='clock__cap'>This is another watch </div>
            <div  style={{display: `${timerId === 0 ? 'none' : 'block'}`}} className={'alternativeClock'+' '+'clock'}>
                <Cl/>
            {clockNum}
            </div>
            <SuperButton onClick={timerId === 0 ? start: stop}>SHOW ALTERNATIVE CLOCK</SuperButton>
        </div>
        
    )
}
export default AlternativeClock
