import React from 'react'


const Genre = (props) => {
  const { genre } = props;

  return (
    <button className="button">
    {genre.name}
    </button>
  )
}

export default Genre