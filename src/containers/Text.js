/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from 'react'
import './Text.css'

const Text = () => {
    return (
        <div className='text'>
            <p>Après 20 années d'expérience en tant que secrétaire juridique et comptable, j'ai autorisé mon côté geek à prendre le dessus et ai décidé de m'auto-former dans l'informatique. </p>
            <p>Depuis presque deux ans, je me passionne pour le <strong>développement web</strong> et je code dès que cela est possible.</p> 
            <p>Ma détermination face à l'inconnu est devenue une force, que je suis fière d'arborer et de mettre au service de mes clients.</p>
            <p>Actuellement, j'aime beaucoup développer en <strong>React.js</strong>, pour son approche orientée "composants", mais je reste à l'écoute de tout type de projets.</p>
            <p>Pour information, le code de ce site est consultable sur mon <a href='https://github.com/SylvanaMelens' target='_blank' rel='noopener noreferrer'>Github</a></p>
        </div>
    )
}

export default Text