import React from 'react';
// import uuid from 'node-uuid';
import Notes from '../components/Notes';

export default class Inbox extends React.Component {
	constructor(props) {
		super();
		this.state = {
			notes: [
				{
					id: 1,
					task: 'Learn React'
				},
				{
					id: 2,
					task: 'Learn Webpack'
				}
			]
		};
	}
	render() {
		return (
			<div>
				<h3>Inbox</h3>
				<button onClick={this.addNote}>+</button>
				<Notes notes={this.state.notes} onEdit={this.onEdit} onDelete={this.onDelete} />
			</div>
		);
	}

	onEdit = (id, task) => {
		if (task === '') {
			return ;
		}
		console.log('Inbox: onEdit', arguments, this);
		const notes = this.state.notes.map((note) => {
			if (note.id === id) {
				note.task = task;
			}

			return note;
		});
		this.setState({ notes: notes });
	};

	onDelete = (id) => {
		console.log('Inbox: onDelete', arguments, this);
		this.setState({
			notes: this.state.notes.filter((note) => {
				return note.id !== id;
			})
		});
	};

	addNote = (e) => {
		this.setState({
			notes: [...this.state.notes, {
				id: this.state.notes.length + 1,
				task: 'New Task'
			}]
		});
	};

}