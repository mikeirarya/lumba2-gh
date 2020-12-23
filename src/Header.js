import React from 'react'
import './Header.css'

function Header() {
    return(
        <div className='header'>
            <img 
            className="header-icon"
            src="https://img2.pngdownload.id/20180630/zyp/kisspng-logo-graphic-design-dolphin-brand-font-5b381df6101390.1324004815304043420659.jpg"
            />

            <div className='header-right'>
                <p>OFFERS</p>
                <p>EXPERIENCE</p>
                <p>GALLERY</p>
            </div>
            <div>
                <button className="book-nav">CHECK AVAILABILITY</button>
            </div>

        </div>
    )
}

export default Header