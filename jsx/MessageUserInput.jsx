import React from 'react';
import ReactDOM from 'react-dom';

class MessageUserInput extends React.Component{
	constructor(){
		super();
	}
	submitMessage(event){
		//push it to the chat_list
		var value = document.getElementById("chatInput").value
		if(value.length > 0){
			this.props.addChatMessage(value);
			document.getElementById("chatInput").value = "";
		}
	}
	enterKeyPressed(event){
		if(event.keyCode == 13){//Enter Key
			this.submitMessage(event);
		}
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
				<ChatInput style={styles.message} onKeyUp={this.enterKeyPressed.bind(this)}/>
				<ChatSubmitButton style={styles.messageButton} onClick={this.submitMessage.bind(this)}/>
			</div>
		);
	}
}

function ChatInput(props){
	return(
		<input id='chatInput' style={props.style} type='text' name='message' onKeyUp={props.onKeyUp}/>
	);
}

function ChatSubmitButton(props){
	return(
		<input style={props.style} type='button' name='submit' value='Send' onClick={props.onClick}/>
	);
}

export default MessageUserInput;