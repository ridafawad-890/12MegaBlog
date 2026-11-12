import React from 'react'
import {Cotainer,Logout,LogoutBtn} from '../index'
import {link, useNavigate } from 'react-router-dom'
import {useSelector}  from 'react-redux'
import {useNavigation} from 'react-router-dom'

/* We use useSelector() in Redux to access or read data (state) from the Redux store inside a React component.

Remember:
- useDispatch() → Sends actions to update the state.
- useSelector() → Reads the state from the store.*/
function Header() {
    const authStatus=useSelector((state)=>state.auth.status)
    const navigate=useNavigate()
   //We use useNavigate() in React Router to navigate from one page/component to another programmatically without refreshing the browser. 
   const navItems=[
    {   name:'Home',
        slug:"/",
        active:true,
    },{
        name:"Login",
        slug: "/login",
        active: !authStatus,
    },{
        name:"Signup",
        slug:"/signup",
        active:!authStatus,
    },{
        name: "All Posts",
        slug: "/allpost",
        active:authStatus,
    }

   ]
  return (
  <header className='py-3 shadow bg-gray-500'>
  <Container>
    <nav className='flex'>
        <div className='mr-4'>
           <link to ='/'>
              <logo width='70px'/>
           </link>
        </div>

        <ul className='flex ml-auto'>
          {navItems.map((item)=>
          item.active?(
            <li key={item.name}>
                <button onClick={()=>navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                    {item.name}
                </button>
            </li>
          ):null

          )}

          {authStatus && (
            <li>
                <LogoutBtn/>
            </li>
          )}  {/* this syntax means if authstatus is true so the next argument will display */}

        </ul>
    </nav>
  </Container>
  </header>
  )
}

export default Header
