import React,{useState,useEffect}from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"

function App() {
  //we will use loading state for requesting the data fetch from appwrite bcz it may take some time
  const[loading,setloading]=useState(true)
  const dispatch=useDispatch()


  //jese hi application load hu tuh useEffect lo or osse pocho ky wo login hai ya nhu
  useEffect(()=>{
authService.getCurrentUser()
//yaha hame data milgya jisko hame ab dispatch krna huga
.then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
  //hameesha hamare pass ya current user ka access huga ya phir logout huga
})
.finally(()=>setloading(false))
  },[])
  //access of enviornment variables deploying in different framwords are different 
  
return !loading ? (
  <div className='min-h-screen flex flexwrap
  content-between bg-gray-400'>
    <div className='w-full block'>
     <Header/>
     <main>
     {/* <Outlet/> yeh ayega react router dom se*/ }
     </main>
     <Footer/>

    </div>
  </div>
) :(null)

}

export default App
