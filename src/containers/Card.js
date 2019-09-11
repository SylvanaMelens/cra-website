/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default class Card extends Component {
    render(){
        const { outerLink, src, title, desc } = this.props.details 
    
        return (
            <div>
                 <a 
                    href={ outerLink } 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                        className='image' 
                        src={ src } 
                        alt={ title }/>
                </a>
                <h1>{ title }</h1>
                {' '}
                <p>{ desc }</p>
            </div>
            )
    }

    static propTypes = {
        details: PropTypes.object.isRequired
    }
}
