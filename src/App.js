import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    state = { 
        fact: ''

     }

     componentDidMount(){
axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
        
            console.log(res.data.value)
        this.setState({
            fact: res.data.value
        })
        })
     }

     handleClick() {
      
        
      window.location.reload("Refresh")
        			
      
        
      }
         
      
     

    render() { 
        return ( 
            <div> <center>
                <h1> </h1>
                
                <p> {this.state.fact}
               <br/> 
               <br/>
               <button onClick={this.handleClick}>Refresh Page</button></p>
                </center></div>
        );
    }
}
 
export default App;

