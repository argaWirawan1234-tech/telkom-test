import React, { memo } from 'react'
import PropTypes from 'prop-types'
function Repo({el}) {
    return (
        <div className="repo">
            <p style={{color: '#58a6ff', fontSize: '20px', fontWeight: 'bolder'}}>{el.name}</p>
        </div>
    )
}
Repo.propTypes = {
    el: PropTypes.object
}
export default memo(Repo)
