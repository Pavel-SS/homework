
// import moment, { Moment } from 'moment'
import { format, parse } from 'date-fns'
import set from 'date-fns/set'
import React, {useState} from 'react'
import { ru, be } from 'date-fns/locale'

    
function AlternativeClock() {
    // const [dates, setDates] = useState <Moment> ()

    // window.setInterval(() => {setDates(moment())}, 1000)
    // const d = dates?.format('LTS');
    
    // return ( 
    //     <div>
    //         { d }
    //     </div>
    // )
  

//     const digitalClock = document.querySelector(".digital-clock");
// const tick = () => {
//   const now = new Date();
//   const HMS = dateFns.format(now, "hh : mm : ss A");
//   const DMY = dateFns.format(now, "dddd, MMMM Do, YYYY");
//   const clock = `<span class="time">${HMS}</span><span>${DMY}</span>`;
//   digitalClock.innerHTML = clock;
// };
const [dates, setDates] = useState<Date>()
const result = format(new Date(),'eeee, dd MMMM HH:mm:ss',{locale: be})
window.setInterval(()=>{setDates(new Date())}, 1000);
    return (
        <div>
            {result}
        </div>
    )
}

export default AlternativeClock
