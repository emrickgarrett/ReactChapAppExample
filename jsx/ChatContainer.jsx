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
					"image":"example1.jpg",
					"messageBody":"Hello, how are you?"
				},

				{
					"id":2,
					"image":"example2.jpg",
					"messageBody":"I am doing just fine!"
				},
				{
					"id":3,
					"image":"example3.png",
					"messageBody":"Same here!"
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
		return (
			<tr>
				<Message userImage={this.props.data.image} userId={this.props.data.id} messageBody={this.props.data.messageBody} />
			</tr>
		);
	}
}

export default ChatContainer;