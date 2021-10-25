//@ts-nocheck
import React, { FC, useEffect, useRef, useState} from 'react';
import './style.scss'

const useOuterClick = (callback) => {
    const innerRef = useRef();
    const callbackRef = useRef();
  
    // set current callback in ref, before second useEffect uses it
    useEffect(() => { // useEffect wrapper to be safe for concurrent mode
      callbackRef.current = callback;
    });
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);

      function handleClick(e) {
        if (
          innerRef.current && 
          callbackRef.current &&
          !innerRef.current.contains(e.target)
        ) {
          callbackRef.current(e);
        }
      }
    }, []);

    return innerRef;
}
  
const CustomSelect: FC<{ options: string[], handler: Function, selected: string, blue?: boolean}> = ({ options, handler, selected, blue }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (option: string) => {
        handler(option)
        setIsOpen(false)
    }

    const innerRef = useOuterClick(e => {
        setIsOpen(false)
    });

    return (
        <div className={`custom-select ${isOpen && "open"}`} ref={innerRef}>
            <div className={`select-selected`} onClick={() => setIsOpen(!isOpen)} style={blue ? {color: "#92F8FF"} : {}}>{selected}</div>
            {isOpen && <div className="select-items">
                {options.map((op,idx) => <div key={op + idx} onClick={() => handleChange(op)}>{op}</div>)}
            </div>}
        </div>
    )
}

export default CustomSelect;
