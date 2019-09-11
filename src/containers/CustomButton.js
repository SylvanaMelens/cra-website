/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import colors from '../utils/colors'

const styles = {
    content : {
        display: 'flex',
        flex:1,
        alignSelf: 'center',
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: '2em',
    },

    button : {
        backgroundColor: colors.subtitle,
        boxShadow: '2px 2px #717171',
        padding: '1em',
        border: '2px solid teal',
        color: 'teal',
        letterSpacing: '0.3em',
    },
    buttonHover: {
        backgroundColor: 'transparent',
        padding: '1em',
        border: '2px solid',
        borderColor: colors.hover,
        color: colors.hover,
        letterSpacing: '0.3em',
    },
    a : {
        color: colors.teal,
    },
    link : {
        textDecoration : 'none',
        color: colors.hover
    }
}

export default class CustomButton extends Component {
    state = {
        button : styles.button,
        a : styles.a
    }
    
    handleMouseEnter = () => {
        console.log("mouse enter button ")
        this.setState({ 
            button : styles.buttonHover, 
            a : styles.link 
        })
    }

    handleMouseLeave = () => {
        console.log("mouse leave button ")
        this.setState({ 
            button : styles.button, 
            a : styles.a 
        })
    }

    render(){
    const { title, href, icon, target, rel } = this.props
    
    return (
        <div style={styles.content}> 
            <a 
                style={this.state.a} 
                href={href} 
                target={target}
                rel={rel}>
                <Button 
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    style={this.state.button}>
                    {title}
                    {icon}
                </Button>
            </a>
        </div>
        
    )
    }
}
