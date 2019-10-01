import React from 'react'

class Cookie extends React.Component{
    constructor(){
        super()
        this.state ={
            clicked : 0
        }
}


updateClicks = () => {
    this.setState({ 
        clicked : this.state.clicked + 1
    })
}

render(){
    return(
        <div>
<h1> This Cookie Clicks!!!:{this.state.clicked}</h1>
<img src ="http://www.esotech.org/wp-content/uploads/2011/06/cookie.jpg" 
     alt ="cookie!!"
    onClick = {() => this.updateClicks()}></img>
    </div>
    )
}


    
}


export default Cookie