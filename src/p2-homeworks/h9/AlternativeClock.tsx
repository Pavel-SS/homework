
import moment, { Moment } from 'moment'
import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {v1} from 'uuid';
import './Style.scss'
import s from './Style.module.scss'
// function AlternativeClock() {
//     const [date, setDate] = useState <Moment> (moment)
//     const [id, setId] = useState <number> (0)

//     const sH = () => {console.log(id)
//         if ( id === 0){ 
//             clearInterval(id)
//             setId(window.setInterval(() => {
//                 setDate(moment())
//             }, 1000))
//         }else{
//             setId(0)
//             clearInterval(id)
//         }
//     }

//     const d = date?.format('LTS') || <span>00:00:00</span>;
    
//     return ( 
//         <div>
//             <SuperButton onClick={sH}>Show Clock</SuperButton>
//             <span className={id === 0 ? 'show': ''}>{ d }</span>
//         </div>
//     )
  
// }


function AlternativeClock(){
    const [x, setX] = useState<Array<number>>([]);
        const xor = [];
        for(let i = 1; i <= 12; i++){
            xor.push(i);  
        }
        if (x.length === 12){
            setX(xor)
        }
       const num = xor.map(item => {
           let num = +item
         return (<div className={'number'+' '+'number'+String(num)}>{item}</div>)
        })

   console.log(x);

   
    return (
        <div className='alternativeClock'>
            <div className={s.hour}></div>
            <div className={s.minut}></div>
            <div className={s.second}></div>
            {num}
        </div>
    )
}
export default AlternativeClock
