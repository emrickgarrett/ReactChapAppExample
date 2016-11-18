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
		return (
			<div>
				<h1>React Chat Application</h1>
			</div>
		);
	}
}

export default App;