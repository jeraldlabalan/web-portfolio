import React from 'react'

function Social() {
  return (
    <div className="home__social">

      <a href="https://www.facebook.com/jerald.labalan.5" 
        className="home__social_icon" target="_blank">
          <i className='uil uil-facebook'></i>
        </a>

      <a href="https://www.linkedin.com/in/jerald-labalan-91b320173/"
        className="home__social_icon" target="_blank">
        <i className='uil uil-linkedin'></i>
      </a>

      <a href="https://github.com/jeraldlabalan"
        className="home__social_icon" target="_blank">
        <i className='uil uil-github'></i>
      </a>
    </div>
  )
}

export default Social