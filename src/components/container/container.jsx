//container hamari properties as a childern accept krta hai
//is mein ham zyt tar css define krte hai or as it is content likhte hai

import React from 'react'

function container({children}) {
  return 
    <div className='w-full max-w-7xl mx-auto px-4 '>
      {children}
    </div>;
  
}
//hamne css ki properties define ki hai jo hamri childern pr implement hugi jo hamne likhe hai
export default container
