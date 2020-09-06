/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from "react";
import "./Text.css";

const Text = () => {
  return (
    <div className="text">
      <p>
        Après 20 années d'expérience dans le domaine administratif, j'ai autorisé mon côté geek à prendre le dessus et ai décidé
        d'approfondir mes connaissances en informatique.{" "}
      </p>
      <p>
        Depuis 2018, je me passionne pour la programmation ainsi que le{" "}
        <strong>développement web</strong> et je code dès que cela est possible.
      </p>
      <p>
        Ma détermination face à l'inconnu est devenue une force, que je suis
        fière d'arborer.
      </p>
      <p>
        Côté front, j'aime beaucoup développer en <strong>React.js</strong>,
        mais je m'adapte à tout type de projets, facilement et
        volontiers.
      </p>
      <p>
        N'hésitez pas à faire un tour sur mon{" "}
        <a
          href="https://github.com/SylvanaMelens"
          target="_blank"
          rel="noopener noreferrer"
        >
         GitHub
        </a>{" "}
        afin de vous faire une petite idée.
      </p>
    </div>
  );
};

export default Text;
