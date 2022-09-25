import React from 'react'
import {Link} from 'react-router-dom'

const Links = () => {
  return (
    <div>
        <ul>
            <li><Link to="/sign-in/">SignIn</Link></li>
            <li><Link to="/sign-up/">Register</Link></li>
        </ul>
    </div>
  )
}

export default Links