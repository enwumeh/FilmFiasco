import React from 'react'


const Video = (props) => {
  const { trailer } = props
  const linkToYT = `https://www.youtube.com/embed/${trailer.key}?rel=0`

  return (
    <div>
      <iframe title="trailer" className="iframe-item" src="linkToYT" />
      {console.log(trailer)}
    </div>
  )
}

export default Video