import './App.css';
import Banner from './components/Banner';
import Itemlist from './components/Itemlist';
import { useState, useEffect} from "react"
import Content from './components/Content';

const App = () => {

  const [username, setUsername] = useState("User")
  const [showCredits, setShowCredits] = useState(true)
  const [showProfileForm, setShowProfileForm] = useState(false)
  const [creditList, setCreditList] = useState([
    {
      name: "Food",
      amount: 12.3,
      date: "1/1/2001"
    },
    {
      name: "Metro",
      amount: 2.75,
      date: "2/1/2001"
    },
    {
      name: "Movies",
      amount: 100.3,
      date: "3/3/2003"
    }
  ])

  const [debitList, setDebitList] = useState([
    {
      name: "Fast Food",
      amount: 32.1,
      date: "2/1/2012"
    },
    {
      name: "Uber",
      amount: 57.20,
      date: "1/12/2012"
    },
    {
      name: "Netflix",
      amount: 30.01,
      date: "6/13/2003"
    }
  ])

  useEffect(() => {
    getCredits();
    getDebits()
}, []);

  const getCredits = async() => {
    const res = await fetch('https://moj-api.herokuapp.com/credits');
    const credits = await res.json();
    setCreditList(credits);
  }

  const getDebits = async() => {
    const res = await fetch('https://moj-api.herokuapp.com/debits');
    const debits = await res.json();
    setDebitList(debits);
  }

  const updateProfile = (usernameText, backgroundColorText, textColorText) =>{

    
    if(usernameText){
      setUsername(usernameText)
    }
    let usernameElement = document.getElementById("usernameText")
    if(textColorText){
      usernameElement.style.color = textColorText
    }
    if(backgroundColorText){
      usernameElement.style.backgroundColor = backgroundColorText
    }

    setShowProfileForm(false)
    // console.log(usernameElement)
    // console.log(textColorText)
    // console.log(backgroundColorText)
  }






  return(
    <div>
      <Banner username={username}/>
      <Content  onDisplayCredits = {() => setShowCredits(!showCredits)}
                onDisplayProfileForm = {() => setShowProfileForm(!showProfileForm)} 
                showCredits = {showCredits} showProfileForm = {showProfileForm}
                onUpdate={updateProfile}
          />
      {showCredits ? <h1>Credits</h1> : <h1> Debits </h1>}
      <Itemlist items = {showCredits ? creditList : debitList}/>

    </div>
  )
}

export default App;
