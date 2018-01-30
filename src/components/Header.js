import React from 'react';


const Header=(props) => {
    return(
        <div className="header">
        <div className="header__img">
            <img src="menu.png" />
        </div>

        <div className="header__name">
            <h1><b>WeEat</b></h1>
        </div>
        </div>
    )
}

export default Header;