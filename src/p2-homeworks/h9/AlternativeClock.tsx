
import moment, { Moment } from 'moment'
import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './AlternativeClock.scss'
    
function AlternativeClock() {
    const [date, setDate] = useState <Moment> (moment)
    const [id, setId] = useState <number> (0)

    const sH = () => {console.log(id)
        if ( id === 0){ 
            clearInterval(id)
            setId(window.setInterval(() => {
                setDate(moment())
            }, 1000))
        }else{
            setId(0)
            clearInterval(id)
        }
    }

    const d = date?.format('LTS') || <span>00:00:00</span>;
    
    return ( 
        <div>
            <SuperButton onClick={sH}>Show Clock</SuperButton>
            <span className={id === 0 ? 'show': ''}>{ d }</span>
        </div>
    )
  
}

export default AlternativeClock
