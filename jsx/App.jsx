import React from 'react';
import ReactDOM from 'react-dom';
import Message from './MessageComponents.jsx';
import ChatContainer from './ChatContainer.jsx';

class App extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<Header/>
			<ChatContainer />
		</div>
		);	
	}
}

class Header extends React.Component{
	render(){

		var style = {
			headerText: {
				margin: 'auto'
			}
		}

		return (
			<div style={style.headerText}>
				<h1>React Chat Application</h1>
			</div>
		);
	}
}

export default App;