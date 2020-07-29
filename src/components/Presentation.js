/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import colors from '../utils/colors'
import Icons from '../containers/Icons'
import Typewriter from '../containers/Typewriter'
import Text from '../containers/Text'


const styles = {
    content: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        image:{
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        marginBottom: '0.7em',
   },
    row: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        textAlign: 'center',
    },
    image: {
        borderRadius: '50%',
        marginBottom: '1em',
        border: '2px dotted',
        borderColor: colors.hover,
    },
    link: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        marginBottom: '1em',
        border: '2px solid',
        borderColor: colors.teal,
    },    
    title: {
        color: colors.title,
        letterSpacing: '0.1em',
        },
    subtitle: {
        color: '#999',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        textDecoration: 'underline dotted',
        textDecorationColor: colors.hover,
        fontWeight: 'normal',
        letterSpacing: '0.1em'
    },
}

export default class Presentation extends Component {
    state = {
            image : styles.image
    }
    
    handleMouseEnter = (e) => {
        console.log('mouse enter ', e)
        this.setState({ image : styles.link })
    }
    
    handleMouseLeave = (e) => {
        console.log('mouse leave ', e)
        this.setState({ image : styles.image })
    }
    
    render(){
        return (

            <div style={styles.content}>
                             
                <div style={styles.content.image}>
                    <img 
                        src='sylvana-melens.jpg'     
                        style={this.state.image}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        alt='sylvana melens'/>
                </div>
                <div style={styles.row}>
                    <h1 style={styles.title}>SYLVANA MELENS</h1>
                    <h2 style={styles.subtitle}>développement web</h2>
                    <Typewriter 
                        place='presentation' 
                        title='Amoureuse du code - Autodidacte' />
                    <Icons />
                    <Text />
                </div>
            </div>
        )
    }
}
