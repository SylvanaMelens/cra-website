/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import Card from '../containers/Card'
import images from '../ListPortfolio'
import colors from '../utils/colors'
import Typewriter from '../containers/Typewriter'

const styles = {
    container: {
        display: 'flex',
        width: '10em'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        backgroundColor: 'teal',
        border: '1px solid teal',
        borderRadius: '0.1em',
        marginRight: '2em',
        marginLeft: '2em',
        color: colors.subtitle,
        textShadow: '1px 1px teal',
        fontSize: '1.7em',
        fontWeight: 'normal',
    }
}

export default class Portfolio extends Component {
    state = {
        ...images
    }
        
    render(){
        const images = Object
            .keys(this.state)
            .map(image => 
                <Card 
                    key={image} 
                    details={this.state[image]} />
                )
        return (
            <div>
                <div style={styles.container}>
                <Typewriter 
                    place='portfolio' 
                    title='mes réalisations' />
                </div>
                <div className="container container-fluid">
                    { images }
                </div>
            </div>
        )
    }
}
