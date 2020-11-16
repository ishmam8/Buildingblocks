import React from 'react'
import { useDispatch } from 'react-redux'

const AnotherChildComponent = () => {
  const dispatch = useDispatch()
  
  function changeTheme (theme) {
    dispatch({ 
      type: 'CHANGE_THEME',
      theme: theme
    })
  } 
  
  return (
    <div>
    {/* 
    Here you can call changeTheme so that it's value is sent to the store
    */}
    </div>
  )
}

export default AnotherChildComponent;