import React from "react"

const Logo = () => {
    return (
        <div className="logo">
            <img alt="Crow" src={window.location.origin + '/crow.svg'} />
        </div>
    )
}

export default Logo