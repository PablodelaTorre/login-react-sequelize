import React from 'react'
import Register from './components/Register.js'
import './App.css';

// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {apiResponse:""}
//   }

//   callApi(){
//     fetch("http://localhost:9000/testApi")
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}))
//   }

//   componentWillMount(){
//     this.callApi()
//   }



  function App() {
    return (
      <div className="App">
          <Register />
      </div>
    );
  }
//}

export default App;
