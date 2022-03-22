import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import Slider from '@mui/material/Slider';
// type SuperDoubleRangePropsType = {
//     onChangeRange?: (value: [number, number]) => void
//     value?: [number, number]
//     // min, max, step, disable, ...
// }

// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value,
//         // min, max, step, disable, ...
//     }
// ) => {
//     // сделать самому, можно подключать библиотеки

//     return (
//         <>
//             DoubleRange
//         </>
//     )
// }

// export default SuperDoubleRange

import s from './SuperDoubleRange.module.css'


type PropsType = {
    valueRange:number[] 
    setValueRange?: any
}

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRangePropsType = DefaultInputPropsType & PropsType

const minDistance = 5;

export const MinimumDistanceSlider:React.FC<SuperRangePropsType>=({
    valueRange,setValueRange, 
})=> {
  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
     setValueRange([Math.min(newValue[0], valueRange[1] - minDistance), valueRange[1]]);
    } else {
      setValueRange([valueRange[0], Math.max(newValue[1], valueRange[0] + minDistance)]);
    }
  };
  return (
      <Slider className={s.container_slider}
        getAriaLabel={() => 'Minimum distance'}
        value={valueRange}
        onChange={handleChange1}
       
        disableSwap
      />
  );
}