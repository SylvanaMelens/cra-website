/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import './Banner.css'
import CustomButton from './CustomButton'

 export default class Banner extends Component {

    render() {
        return (
            <div className='banner'>
                <div className='text-container'>
                    <p className='text-banner'>Ce site utilise des cookies dits "traceurs", permettant à l'auteur du site d'analyser le trafic entrant et de mesurer l'audience du site via l'outil Google Analytics et la récolte de statistiques anonymes.<br/>Acceptez-vous d'y participer ?</p>
                    
                </div>
                <div className='buttons'>
                    <CustomButton 
                        title="Accepter" 
                        onClick={this.props.onClick}
                    />
                    <CustomButton 
                        title="Refuser" 
                        href="https://fr.wikipedia.org/wiki/Cookie_(informatique)#Id%C3%A9es_re%C3%A7ues"
                    />
                </div>
            </div>
        )
    }
}

