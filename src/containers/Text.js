/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from 'react'
import './Text.css'
import { RiSunLine } from 'react-icons/ri'

const Text = () => {
  return (
    <div className='text'>
      <p>
        Créative et passionnée par le <em>développement web</em>, je prends plaisir à donner vie aux idées que je code, principalement en <strong>React.Js</strong>.{' '}
      </p>
      <h2>Objectif</h2>
      <p>
        Mon objectif est d’aider les porteurs de projets à concrétiser leurs précieuses idées d'<em>application web</em>.
      </p>
      <p>
        J’analyse le projet et les fonctionnalités nécessaires à l’établissement d’un <em>MVP</em>, je communique une estimation en termes de temps, j’établis avec vous un cadre de travail permettant une communication efficace et harmonieuse et, enfin, je vous livre votre idée concrétisée dans les délais prévus.
      </p>
      <p>
        Pour toute question, vous pouvez me contacter via <a href='https://www.malt.be/profile/sylvanamelens' target='_blank' rel='noopener noreferrer'>Malt</a>, <a href='https://linkedin.com/in/sylvana-melens' target='_blank' rel='noopener noreferrer'>LinkedIn</a> ou m’envoyer un <a href='mailto::sylvana.melens@hotmail.com' target='_blank' rel='noopener noreferrer'>mail</a>.
      </p>

      <h2>Qui je suis</h2>

      <p>Passionnée et autodidacte, ce sont les deux premiers mots qui me viennent pour me décrire.</p>
      <p>Après 20 ans de carrière dans le domaine du secrétariat juridique et de la comptabilité, j’ai autorisé mon côté geek à prendre le dessus et je me suis dirigée avec un panel de soft skills vers le marché du développement web.</p>
      <p>Quelle que soit la fonction que j'ai occupée, je me suis continuellement tenue à jour en matière de législation, j'ai toujours fait preuve de respect et j'ai eu à coeur de trouver des solutions rapidement et faire ainsi gagner du temps à mes clients.</p>

      <p>La curiosité, la débrouillardise et le goût du travail bien fait ne sont pas près de me quitter et je suis ravie de pouvoir les mettre à profit.</p>
      <p>A côté de ce tempérament plutôt rationnel, mon âme d’artiste me permet d’apporter une touche de sensibilité et d’esthétisme aux projets que j’entreprends.</p>
      <p>
        Je vous invite à parcourir mon portfolio ainsi qu'à faire un tour sur mon{' '}
        <a
          href='https://github.com/SylvanaMelens'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>, certains de mes projets y sont publiés.
      </p>

      <p>Belle journée! <RiSunLine /> </p>
    </div>
  )
}

export default Text
