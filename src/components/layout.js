import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const layout = () => 
<div>
    <div class="header">
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
        </div>
        <div>
            <form>
                <button id="loginButton">Log in</button>
                <button id="registerButton">Register</button>
            </form>
        </div>
    </div>

    <div class="footer">
        <div>
            <img src="logo.ico" width="70px" height="70px" align="left"/>
            <span>&copy; By maleri$h and Barke</span>
        </div>
    </div>
</div>

export default layout