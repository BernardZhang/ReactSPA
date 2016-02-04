import React from 'react';

export default class Note extends React.Component {
	constructor(props) {
		debugger;
		super(props);

		this.state = {
			editing: false
		};
	}
	render() {
		if (this.state.editing) {
			return this.renderEdit();
		}

		return this.renderNote();
	}
	renderNote = () => {
		return (
			<div onClick={this.edit}>
				<span>{this.props.task}</span>
				{this.props.onDelete ? this.renderDelete() : null}
			</div>
		);
	};
	renderEdit = () => {
		return <input type="text"
	 	    autoFocus={true} 
	 	    placeholder={this.props.task}
	 	    onBlur={this.finishEdit}
	 	    onKeyPress={this.checkEnter} />;
	};
	renderDelete = () => {
    	return <button onClick={this.props.onDelete}>x</button>;
    };
	edit = () => {
		this.setState({
			editing: true
		});
	};
	checkEnter = (e) => {
		debugger;
		if (e.key === 'Enter') {
			this.finishEdit(e);
		}
	};
	finishEdit = (e) => {
		debugger;
		if (this.props.onEdit) {
			this.props.onEdit(e.target.value);
		}

		this.setState({
			editing: false
		});
	};
}