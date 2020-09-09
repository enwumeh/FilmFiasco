import React from 'react'
import { Link } from 'react-router-dom'

const ChoiceBanner = props => (

  <div class="container">
    <p class="homescreen">
      click here to show the latest streaming television
    </p>
    <Link to="/movies" className="bigButton">
      Movies
    </Link>
    <Link to="/tv" className="bigButton">
      TV
    </Link>
  </div>
)

export default ChoiceBanner