import React, { Component } from 'react'

export class Count extends Component {
  constructor(){
    super()
    this.state={
      counter : 0
    }
  }
increment=()=>{
  this.setState({
    counter : this.state.counter +1
  })
}
decrement=()=>{
  if(this.state.counter >0)
  this.setState({
    counter : this.state.counter -1
  })
}
reset=()=>{
  this.setState({
    counter :0
  })
}


  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button  onClick={()=> this.increment()}>plus</button>
        <button  onClick={()=> this.decrement()}>moin</button>
        <button  onClick={()=> this.reset()}>reset</button>
        <h2>{this.state.counter} </h2>
        
        </div>
    )
  }
}

export default Count