import React from 'react'

const Loader = () => {
    return (
        <img
            src={process.env.PUBLIC_URL + '/images/832.svg'}
            alt='Loader'
        />
    )
}

export default Loader