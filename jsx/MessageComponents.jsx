import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component{

	profileClick(){
		var id = this.props.userId;
		//do something with the id
		console.log(id);
	}
	render(){

		var styles = {
			images: {
				width:'50px',
				height:'50px',
				display:'inline'
			},
			messageBody: {
				display:'inline',
				minWidth: '200px',
				maxWidth: '800px',
				width: '100%',
			}
		}

		return (
			<div>
				<MessageProfile style={styles.images}  imageSrc={this.props.userImage} onClick = {() => this.profileClick()} />
				<MessageBody style={styles.messageBody} messageBody={this.props.messageBody}  />
			</div>
		);
	}

}

function MessageProfile(props){
	return(
		<img style={props.style} src={props.imageSrc} className="message_profile" onClick={() => props.onClick()}/>
	);
}

function MessageBody(props){
	return(
		<span style={props.style}>{props.messageBody}</span>
	);
}

export default Message;