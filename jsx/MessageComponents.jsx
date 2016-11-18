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
				float:'left',
				borderRadius: '25px',
				border: '1px solid ' + this.props.userColor,
			},
			messageBody: {
				float:'left',
				minWidth: '200px',
				maxWidth: '800px',
				fontSize: '1.1em',
				marginTop: '15px',
				marginLeft: '25px',
				display:'block',
				color:this.props.userColor,
			}
		}

		return (
			<p>
				<MessageProfile style={styles.images}  imageSrc={this.props.userImage} onClick = {() => this.profileClick()} />
				<MessageBody style={styles.messageBody} messageBody={this.props.messageBody}  />
			</p>
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