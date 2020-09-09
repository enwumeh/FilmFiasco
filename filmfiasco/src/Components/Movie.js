import React from 'react'
import { Component } from 'react'
import MovieHome from './MovieHome'
import { Link } from 'react-router-dom'

class Movie extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      status: false,
      loading: true
    }
  }
  
}

export default Movie