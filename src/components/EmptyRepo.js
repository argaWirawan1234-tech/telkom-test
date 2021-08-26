import React, {memo} from 'react'
import logo from '../static/Octocat.png'

function EmptyRepo() {
    return (
        <div  className="emptyRepository">
            <img src={logo} alt="octocat" style={{width: '100px'}}></img>
            <p>This user does not have any repository</p>
        </div>
    )
}

export default memo(EmptyRepo)