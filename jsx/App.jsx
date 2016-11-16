import React from 'react';
import ReactDOM from 'react-dom';
import Message from './MessageComponents.jsx';

class App extends React.Component{
	constructor(){
		super();

		this.state = {
			data:
			[
				{
					"id":1,
					"name":"Foo",
					"age":"20"
				},

				{
					"id":2,
					"name":"Bar",
					"age":"30"
				},
				{
					"id":3,
					"name":"Baz",
					"age":"40"
				}
			]
		}
	}
	render(){
		return(
		<div>
			<Header/>
			<table>
				<tbody>
					{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
				</tbody>
			</table>
			<Message userImage='img/example.jpg' userId='0' messageBody='Hello World! This is an example of a message!' />
		</div>
		);	
	}
}

class Header extends React.Component{
	render(){
		return (
			<div>
				<h1>Header</h1>
			</div>
		);
	}
}

class Content extends React.Component {
	render(){
		return (
			<div>
				<h2>Content</h2>
				<p> The Content Text!!!</p>
			</div>
		);
	}
}

class TableRow extends React.Component{
	render(){
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}

export default App;