import React, {memo} from 'react'
import logo from '../static/logo.svg';
function Loading() {
    return (
        <img src={logo} className="App-logo" alt="logo" />
    )
}

export default memo(Loading)
