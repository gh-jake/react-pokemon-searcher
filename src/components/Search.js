import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" name="search" onChange={props.onType}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
