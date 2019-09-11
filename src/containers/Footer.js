/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from 'react'
import colors from '../utils/colors'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { DiGithubBadge } from "react-icons/di";

const styles = {
    copyright : {
        position: 'fixed',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: '0.5em',
        marginTop: '0.5em'        
    },
     text : {
         color: colors.title,
         fontSize: '0.8em',
         fontStyle: 'italic',
         paddingTop: '0.5em',
         marginRight: '1em'
    },
    logo : {
        color: colors.title,
        fontSize: '1em',
        marginRight: '1em'
    },
    mail : {
        color: colors.hover,
        fontSize: '2.5em'
        
    }
}

const Footer = () => {
    return (
        <div 
            style={styles.copyright} 
            className="container-fluid col-sm">
            <p style={styles.text}>Copyright 2019 &copy; Sylvana MELENS</p>
            <div> 
                <a 
                    style={styles.text} 
                    href='https://www.linkedin.com/in/sylvana-melens' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <FaLinkedinIn />
                </a>
                <a 
                    style={styles.logo} 
                    href='https://github.com/SylvanaMelens' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <DiGithubBadge />
                </a>
                <a 
                    style={styles.text} 
                    href='mailto::sylvana.melens@hotmail.com' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <FaEnvelope style={styles.mail}/>
                </a>
            </div>
        </div>
    )
}

export default Footer