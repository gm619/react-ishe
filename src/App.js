import React, { Component } from 'react';
import Clock from './Clock';
import Events from './Events';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          'age': '20'
        },
        {
          'id': 2,
          'name': 'Bar',
          'age': '30'
        },
        {
          'id': 3,
          'name': 'Baz',
          'age': '40'
        }
      ]
    }
  }
  // activateLaser() {
  //   alert("BaBaHhh");
  // }
  render() {
    return(
      <div>
        <Header/>
        <tabel>
          <tbody>
            {
              this.state.data.map(
                (person, i) => <TableRow key = {i} data= {person}/>
              )
            }
          </tbody>
        </tabel>
        <Clock name="Johnny" />
        <Clock name="Thomas" />
        <Events />
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class TableRow extends Component {
  render(){
    return(
      <tr>
        <td>{this.props.data.id} </td>
        <td>{this.props.data.name} </td>
        <td>{this.props.data.age} </td>
      </tr>
    )
  }
}
export default App;
