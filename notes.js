(npm install axios)

import React, { Component } from 'react';
import axios from 'axios'

class  extends Component {
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

    render() { 
        return ( 
            <div> 
                <h1> App.js</h1>
                {this.state.fact}
                </div>
        );
    }
}
 
export default App;

(npm start)