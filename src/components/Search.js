import React, { memo } from 'react'
import PropTypes from 'prop-types'

function Search({username, memoizedSearch, setUsername}) {
    return (
    <div className="inputUserNameBox">
        <input className="inputUserName" placeholder="Input Github Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button className="submitButton" onClick={() => memoizedSearch()}>
          Search
        </button>
      </div>
    )
}

Search.propTypes = {
    username: PropTypes.string,
    memoizedSearch: PropTypes.func,
    setUsername: PropTypes.func
}
export default memo(Search)
