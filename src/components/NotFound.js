import React, {memo} from 'react'
import logo from '../static/Octocat.png'

function NotFound() {
    return (
        <div  className="repositoryNotFound">
            <img src={logo} alt="octocat" style={{width: '100px'}}></img>
            <p>No Repository Found</p>
        </div>
    )
}

export default memo(NotFound)