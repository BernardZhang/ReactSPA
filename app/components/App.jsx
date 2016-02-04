import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';

export default class App extends React.Component {
	constructor(props) {
		debugger;
		super(props);

		this.state = {
			notes: [
		  		{
		  			id: uuid.v4(),
		  			task: 'Learn Webpack'
		  		},
		  		{
			        id: uuid.v4(),
			        task: 'Learn React:)'
		        },
			    {
			        id: uuid.v4(),
			        task: 'Do laundry!'
			    }
	  	    ]
		};
	}	
    render() {
  	    const notes = this.state.notes;

	    return (
	    	<div>
                <h3>Update1111222555</h3>
	    		<button onClick={this.addNote}>+</button>
	    		<Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
	    	</div>
		);
    }

    addNote = () => {
    	this.setState({
    		notes: [...this.state.notes, {
    			id: uuid.v4(),
    			task: 'New Task'
    		}]
    	});
    };

    editNote = (id, task) => {
    	const notes = this.state.notes.map((note) => {
    		if (note.id === id && task) {
    			note.task = task;
    		}

    		return note;
    	});

    	this.setState({
    		notes: notes
    	});
    };

    deleteNote = (id) => {
    	this.setState({
    		notes: this.state.notes.filter((note) => {
    			return note.id !== id;
    		})
    	})
    };
}