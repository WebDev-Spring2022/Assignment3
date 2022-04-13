import Button from "./Button"
import ProfileForm from "./ProfileForm"

const Content = ({showCredits, onDisplayCredits, showProfileForm, onUpdate, onDisplayProfileForm}) => {

    const toUpdate = (usernameText, backgroundColorText, textColorText) =>{
        onUpdate(usernameText, backgroundColorText, textColorText)
    }
    
    return(
        <div>
            <div>
                <Button color = {showCredits ? "green" : "blue" }text = {showCredits ? "show Debits" : "show Credits"} onClick = {onDisplayCredits}/>
                <Button color = {showProfileForm ? "red" : "silver"} text = {showProfileForm ? "Close Form" : "Update Profile"} onClick = {onDisplayProfileForm}/>
            </div>
            <div>
                {showProfileForm && <ProfileForm onUpdate = {toUpdate}/>}
            </div>
        </div>
    )    

}

export default Content