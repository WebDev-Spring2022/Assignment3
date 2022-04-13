import { useState } from "react"

const ProfileForm = ({onUpdate}) => {

    const [usernameText, setUsernameText] = useState("")
    const [backgroundColorText, setBackgroundColorText] = useState("")
    const [textColorText, setTextColorText] = useState("")

    const onSubmit = (e) =>{
        e.preventDefault()
        // if(!usernameText){
        //     alert("Don't leave the username empty!")
        //     return
        // }
        onUpdate(usernameText, backgroundColorText, textColorText)
        setUsernameText("")
        setBackgroundColorText("")
        setTextColorText("")
    }


    return(
        <div>
            <form className = "add-form" onSubmit = {onSubmit}>
                <div className="form-control">
                    <label> New Username: </label>
                    <input type = "text" placeholder= "Type New Username"
                    value = {usernameText} onChange={(e) => setUsernameText(e.target.value)}>     
                    </input>
                </div>
                <div className="form-control">
                    <label> Set New Background Color: </label>
                    <input type = "text" placeholder= "Ex: #00ff00"
                    value = {backgroundColorText} onChange={(e) => setBackgroundColorText(e.target.value)}>     
                    </input>
                </div>
                <div className="form-control">
                    <label> Set New Text Color: </label>
                    <input type = "text" placeholder= "Ex: #00ff00"
                    value = {textColorText} onChange={(e) => setTextColorText(e.target.value)}>     
                    </input>
                </div>
                <input className = "btn" type="submit" value = "Update Profile"></input>
            </form>
        </div>
    )
}

export default ProfileForm