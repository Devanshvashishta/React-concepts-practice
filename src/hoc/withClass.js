import React from 'react'

function withClass(WrappedComponent, className) {
    return (
       props =>(
           <div className={className}>
               <WrappedComponent {...props}/>
           </div>    
       )
    )
}

export default withClass
