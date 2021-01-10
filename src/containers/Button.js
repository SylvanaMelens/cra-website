import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  button: {
    margin: '0 auto',
    boxShadow: '0px 5px 30px 2px rgba(0,0,0,0.2)'
  }
}
const Button = ({ to, title }) => {
  return (
    <>
      <Link
        style={styles.button}
        to={to}
        className='btn btn-light ml-3 p-3'
      >
        {title}
      </Link>
    </>
  )
}

export default Button
