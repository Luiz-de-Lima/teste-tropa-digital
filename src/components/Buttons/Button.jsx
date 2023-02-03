import React from 'react'
import './style.scss'
export const Button = ({ children }) => {
  return (
    <div><button className='button'>{children}</button></div>
  )
}
