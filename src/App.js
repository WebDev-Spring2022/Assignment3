const App = () => {
  
  const [username, setUsername] = useState("User")
  const [showCredits, setShowCredits] = useState(true)
  const [showProfileForm, setShowProfileForm] = useState(false)
  const [creditList, setCreditList] = useState([
    {
      description: "Food",
      amount: 12.3,
      date: "1/1/2001"
    },
    {
      description: "Metro",
      amount: 2.75,
      date: "2/1/2001"
    },
    {
      description: "Movies",
      amount: 100.3,
      date: "3/3/2003"
    }
  ])

  const [debitList, setDebitList] = useState([
    {
      description: "Fast Food",
      amount: 32.1,
      date: "2/1/2012"
    },
    {
      description: "Uber",
      amount: 57.20,
      date: "1/12/2012"
    },
    {
      description: "Netflix",
      amount: 30.01,
      date: "6/13/2003"
    }
  ])

  const updateProfile = (usernameText, backgroundColorText, textColorText) =>{

    if(usernameText){
      setUsername(usernameText)
    }
    console.log(usernameElement)
    console.log(textColorText)
    console.log(backgroundColorText)
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

