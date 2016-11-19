import React from 'react';
import ReactDOM from 'react-dom';

class MessageUserInput extends React.Component{
	constructor(){
		super();
	}

	render(){

		var styles = {
			container:{
				width:'99%',
				display:'flex',
				margin:'20px auto 2px auto',
			},
			message: {
				padding: '2px',
				height:'32px',
				fontSize: '1.2em',
				color: 'black',
				width:'100%',
				borderRadius: '5px',
				flex:'2',
			},
			messageButton: {
				color:'white',
				backgroundColor: '#4CAF50',
				textAlign: 'center',
				textDecoration: 'none',
				border:'none',
				padding:'2px',
				height:'38px',
				width:'60px',
				fontSize: '1.2em',
				borderRadius: '5px',
				marginLeft:'2px',
			}
		}

		return(
			<div style={styles.container}>
				<ChatInput style={styles.message} />
				<ChatSubmitButton style={styles.messageButton}/>
			</div>
		);
	}
}

function ChatInput(props){
	return(
		<input style={props.style} type='text' name='message'/>
	);
}

function ChatSubmitButton(props){
	return(
		<input style={props.style} type='button' name='submit' value='Send'/>
	);
}

export default MessageUserInput;