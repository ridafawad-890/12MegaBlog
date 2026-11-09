
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE)
  //access of enviornment variables deploying in different framwords are different 
  return (
    <>
    <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
