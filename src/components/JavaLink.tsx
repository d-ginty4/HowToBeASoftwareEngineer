import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJava} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

export const JavaLink = () => {
  return (
    <>
        <FontAwesomeIcon icon={faJava} size="2x"/>
        <Link to="java">Java</Link>
    </>
  )
}
