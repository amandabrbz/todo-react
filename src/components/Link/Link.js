import React from 'react'
import { Link } from "react-router-dom";
import './Link.css'

export const LinkTo = (props) => {
  return (
    <div className="links">
      <Link to={props.link} className="link">{props.whereTo}</Link>
    </div>
  )
}
