import React from 'react'
import "./Nav.css"

function Nav() {
    return (
        <div className={`nav`}>
            <div className={`nav-logo`}>
                <img 
                    src="hello.PNG" 
                    alt="hello" 
                />
                <span>Hello</span>
            </div>
            <div className={`nav-logo`} >
                <img 
                    src="iloveyou.PNG" 
                    alt="loveyou" 
                />
                <span>Love</span>
            </div>
            <div className={`nav-logo`} >
                <img 
                    src="yes.PNG" 
                    alt="yes" 
                />
                <span>Yes</span>
            </div>
            <div className={`nav-logo`} >
                <img 
                    src="no.PNG" 
                    alt="no" 
                />
                <span>No</span>
            </div>
            <div className={`nav-logo`} >
                <img 
                    src="thankyou.PNG" 
                    alt="thankyou" 
                />
                <span>Thanks</span>
            </div>
        </div>
    )
}

export default Nav
