/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from 'react'
import colors from '../utils/colors'
import { DiReact, DiJavascript1, DiJqueryLogo, DiBootstrap, DiHtml5, DiCss3, DiWordpress, DiCode, DiDatabase, DiGit, DiGithubBadge, DiMysql, DiPhp, DiPython } from 'react-icons/di'

const styles = {
  h3: {
    color: colors.title,
    fontStyle: 'italic',
    paddingBottom: '0.5em'
  }
}

const Icons = () => {
  return (
    <div>
      <h3 style={styles.h3}>
        <DiReact title='React.js' />
        <DiJavascript1 title='JavaScript' />
        <DiHtml5 title='HTML5' />
        <DiCss3 title='CSS3' />
        <DiJqueryLogo title='jQuery' />
        <DiBootstrap title='Bootstrap' />
        <DiWordpress title='Wordpress' />
      </h3>
      <h3 style={styles.h3}>
        <DiPython title='Python 3' />
        <DiPhp title='PHP7' />
        <DiMysql title='mySQL' />
        <DiDatabase title='SQL' />
        <DiCode title='invite de commande' />
        <DiGit title='Git' />
        <DiGithubBadge title='Github' />
      </h3>
    </div>
  )
}

export default Icons
