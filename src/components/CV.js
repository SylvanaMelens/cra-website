/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from 'react'
import CustomButton from '../containers/CustomButton'

const styles = {
    content: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    img: {
        width: '65%',
        boxShadow: '0px 5px 15px 2px black',
        marginBottom: '0.7em',
    },
}

const CV = () => {
    return (   
        <div style={styles.content}>
            <CustomButton 
                title="Télécharger le PDF" 
                href="cv-sylvana-melens.pdf"
                target="blank"
                rel="noopener noreferrer" />
            <img 
                style={styles.img} 
                src="cv-sylvana-melens.jpg" 
                alt="CV Sylvana MELENS"/>
        </div>
    )
}

export default CV