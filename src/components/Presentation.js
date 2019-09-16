/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import colors from '../utils/colors'
import { DiReact, DiJavascript1, DiJqueryLogo, DiBootstrap, DiHtml5, DiCss3, DiWordpress, DiCode, DiDatabase, DiGit, DiGithubBadge, DiMysql, DiPhp, DiPython } from 'react-icons/di'
import Typewriter from '../containers/Typewriter'

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
        marginBottom: '0.7em'
    },
    row: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        textAlign: 'center',
        paddingLeft: '1em',
        paddingRight: '0.5em'
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
        letterSpacing: '0.2em',
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
    h3: {
        color: colors.title,
        fontStyle: 'italic',
        paddingBottom: '0.5em',
    },
    text:{
        color: 'teal'
    }     
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
                    <h3 style={styles.h3}>
                        <DiReact title='React.js'/> 
                        <DiJavascript1 title='JavaScript'/> 
                        <DiHtml5 title='HTML5'/> 
                        <DiCss3 title='CSS3'/> 
                        <DiJqueryLogo title='jQuery'/> 
                        <DiBootstrap title='Bootstrap'/>  
                        <DiWordpress title='Wordpress'/>
                    </h3>
                    <h3 style={styles.h3}>
                        <DiPython title='Python 3'/> 
                        <DiPhp title='PHP7'/> 
                        <DiMysql title='mySQL'/> 
                        <DiDatabase title='SQL'/> 
                        <DiCode title='invite de commande' /> 
                        <DiGit title='Git'/>  
                        <DiGithubBadge title='Github' />
                    </h3>
                </div>
            </div>
        )
    }
}
