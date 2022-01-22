
// import moment, { Moment } from 'moment'
import { format } from 'date-fns'
import React, {useState} from 'react'
import { be } from 'date-fns/locale'

    
function AlternativeClock() {
    // const [dates, setDates] = useState <Moment> ()

    // window.setInterval(() => {setDates(moment())}, 1000)
    // const d = dates?.format('LTS');
    
    // return ( 
    //     <div>
    //         { d }
    //     </div>
    // )
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
