import React from 'react';
import ReactDOM from 'react-dom';
import Message from './MessageComponents.jsx';

class ChatContainer extends React.Component{
	constructor(){
		super();

		this.state = {
			dummyData:
			[
				{
					"id":1,
					"image":"images/default_pic.jpg",
					"messageBody":"Hello, how are you?",
					"userColor": "blue"
				},

				{
					"id":2,
					"image":"images/default_pic.jpg",
					"messageBody":"I am doing just fine!",
					"userColor": "green"
				},
				{
					"id":3,
					"image":"images/default_pic.jpg",
					"messageBody":"Same here!",
					"userColor": "orange"
				}
			]
		}
	}

	render(){
		return(
			<div>
				<table>
					<tbody>
						{this.state.dummyData.map((message, i) => <ChatMessage key = {i} data = {message} />)}
					</tbody>
				</table>
			</div>
		);
	}
}

class ChatMessage extends React.Component{
	render(){

		//Not sure how to do :not(last-child) in react lol
		var style = {
			message:{
				marginTop:'15px'
			}
		}

		return (
			<tr>
				<Message style={style} userImage={this.props.data.image} userId={this.props.data.id} messageBody={this.props.data.messageBody} userColor={this.props.data.userColor} />
			</tr>
		);
	}
}

export default ChatContainer;