import Clock from "./Clock"
import './Banner.css'

const Banner = ({username}) =>{


    return(
        <header className = "header">
            <h1> Welcome <span id = "usernameText">{username} </span></h1>
            <Clock></Clock>
        </header>
    )
    
}

Banner.defaultProps = {
    username: "User"
}

export default Banner