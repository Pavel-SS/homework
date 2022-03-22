import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {MinimumDistanceSlider} from './common/c8-SuperDoubleRange/SuperDoubleRange'

import style from './common/c7-SuperRange/SuperRange.module.css'
function HW11() {
    const [value1, setValue1] = useState(0)

    const [value2, setValue2] = useState([20, 80])

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={style.span_range}>{value1}</span>
                <SuperRange
                    value={value1}
                    onChange={e=> setValue1(+e.currentTarget.value)}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span className={style.span_range}>{value2[0]}</span>
                {/* <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                /> */}
                <MinimumDistanceSlider
                    valueRange = {value2}
                    setValueRange = {setValue2}
                />
                <span className={style.span_range}>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
