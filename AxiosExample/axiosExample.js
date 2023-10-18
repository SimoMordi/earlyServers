import axios from "axios"


const makeRequest = async () => {
  let res =  await axios("https://api.chucknorris.io/jokes/random")

  useEffect( () => {
    makeRequest()
  },[])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
