/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { DiGithubBadge } from 'react-icons/di'

export default class Card extends Component {
  render() {
    const { outerLink, src, title, desc, githubLink } = this.props.details;

    return (
      <div>
        <a href={outerLink} target="_blank" rel="noopener noreferrer">
          <img className="image" src={src} alt={title} />
        </a>
        <h1>{title}</h1> <p>{desc}</p>
        { githubLink ? <div><a className='github-link' target='_blank' rel='noopener noreferrer' href={githubLink}><DiGithubBadge/> Voir le repo GitHub</a> </div> : null }
      </div>
    );
  }

  static propTypes = {
    details: PropTypes.object.isRequired,
  };
}
