import React,{useState} from 'react';
import {useSelector} from 'react-redux';

const ChildComponent = () => {
  const appTheme = useSelector(state => state.theme)
  return (
    <div>
      <p>{appTheme}</p>
    </div>
  )
}

export default ChildComponent;