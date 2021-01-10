/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from 'react'
import './Typewriter.css'

const Typewriter = ({ title, place }) =>
  <div className={place}>
    {title}
  </div>

export default Typewriter
