import React from 'react';
import ReactDOM from 'react-dom';

class MessageUserInput extends React.Component{
	constructor(){
		super();
	}
	submitMessage(event){
		//alert(document.getElementById("chatInput").value);
		//push it to the chat_list
		this.props.addChatMessage(document.getElementById("chatInput").value);
		document.getElementById("chatInput").value = "";
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
				<ChatSubmitButton style={styles.messageButton} onClick={this.submitMessage.bind(this)}/>
			</div>
		);
	}
}

function ChatInput(props){
	return(
		<input id='chatInput' style={props.style} type='text' name='message'/>
	);
}

function ChatSubmitButton(props){
	return(
		<input style={props.style} type='button' name='submit' value='Send' onClick={props.onClick}/>
	);
}

export default MessageUserInput;