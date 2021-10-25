//@ts-nocheck
import React, { FC, useState } from 'react';
import './style.scss'

const CustomMultiSelect: FC<{ options: string[], handler: Function, selected: Array, blue?: boolean }> = ({ options, handler, selected, blue }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([...selected])

  const handleChange = (option: string) => {
    setIsOpen(false)
    if (data.some(item => option === item)) {
    }
    else {
      setData([...data, option])
    }
  }
  const removeItem = (item)=>{
    setData([...data.filter(option=>{return option !== item})])
  }

  return (
    <div className={`custom-select ${isOpen && "open"}`}>
      <div className={`select-selected`} onClick={() => setIsOpen(!isOpen)} style={blue ? { color: "#92F8FF" } : {}}>{data.map((item, idx) => (
        <button className="ban-btn-one" onClick={()=>{removeItem(item)}}><span style={{ color: "#ffffff", marginRight: "10px" }}>X</span>{item}</button>
      ))}</div>
      {isOpen && <div className="select-items">
        {options.map((op, idx) => <div key={op + idx} onClick={() => handleChange(op)}>{op}</div>)}
      </div>}
    </div>
  )
}

export default CustomMultiSelect;
