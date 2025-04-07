import React from 'react'
import errorImage from '../../assets/errorimg.jpeg'
import './error.css'
function Error() {
  return (
    <>
        <div className='errorimg'>
        <img src={errorImage} alt="error" />
        </div>
    </>
  )
}

export default Error
