import Clock from "./Clock"

const Banner = ({username}) =>{


    return(
        <header>
            <h1> Welcome <span id = "usernameText">{username} </span></h1>
            <Clock></Clock>
        </header>
    )
    
}

Banner.defaultProps = {
    username: "User"
}

export default Banner