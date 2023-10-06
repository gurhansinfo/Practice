import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }

  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data)=> {
      this.setState({data})
      console.log(data)
    })
  }

   // const url = "https://jsonplaceholder.typicode.com/users";

  render() {
    const  {data} = this.state
    return (
      <div className='api_table'>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                
                <th>City</th>
            </tr>
            {data.map((e) =>(
              <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.address.city}</td>
              <td></td>
          </tr>
            ) 
            )}
            
        </table>
      </div>
    )
  }
}
