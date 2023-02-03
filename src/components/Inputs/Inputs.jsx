import React from 'react'
import './styles.scss'
export const Inputs = ({ type, placeholder }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className="input" />
    </>
  )
}
