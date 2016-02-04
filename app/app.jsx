import './css/style.less';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect, Link } from 'react-router';
// import routes from './routes';
// import About from './views/About';
// import Inbox from './views/Inbox';
// import Message from './views/Message';
// import Notes from './components/Notes.jsx';

import Header from './components/Header.jsx';

const App = React.createClass({
	getInitialState() {
		var state = {
			notes: [
				{
					id: 1,
					task: 'Learn Webpack'
				}
			]
		}

		return state;
	},
	render() {
		debugger;
		return (
			<div className="app-container">
				<Header selectedItem={this.props.location.pathname}/>
				{this.props.children || this.props.default}
			</div>
		);
	}
});

//<!--Notes notes={notes} onEdit={onEdit} onDelete={onDelete}/-->

var onEnter = function () {
	console.log('onEnter', arguments);
};

var onLeave = function () {
	console.log('onLeave', arguments);
};

const routes = {
  path: '/',
  component: App,
  indexRoute: {
  	getComponent: (location, cb) => {
  		alert(location.pathname);
  		debugger;
  		return require.ensure([], (require) => {
  			debugger;
  		  alert(JSON.stringify(require('./views/About.jsx')));
          cb(null, require('./views/About'));
        });
	} 
  },
  childRoutes: [
  	{
  		path: '/',
  		getComponent: (location, cb) => {
  			return require.ensure([], (require) => {
	          cb(null, require('./views/About'));
	        });
  		} 
  	},
    { 
    	path: 'about', 
    	// component: About,
		getComponent: (location, cb) => {
			debugger;
	        return require.ensure([], (require) => {
	          cb(null, require('./views/About'));
	        });
	  	},
    	onEnter: onEnter,
    	onLeave: onLeave
	},
    { 
    	path: 'inbox', 
    	// component: Inbox,
		getComponent: (location, cb) => {
	        return require.ensure([], (require) => {
	          cb(null, require('./views/Inbox'));
	        });
	  	},
    	onEnter: onEnter,
    	onLeave: onLeave
	},
    { 
    	path: 'message/:id', 
    	// component: Message,
    	getComponent: (location, cb) => {
	        return require.ensure([], (require) => {
	          cb(null, require('./views/Message'));
	        });
	  	},
    	onEnter: onEnter,
    	onLeave: onLeave 
    }
  ]
};

// ReactDom.render((
// 	<Router>
// 		<Route path="/" component={App}>
// 			<IndexRoute component={About} />
// 			<Route path="about" component={About} />
// 			<Route path="inbox" component={Inbox}>
// 				<Route path="/message/:id" component={Message} />

// 				{/* Redirect /inbox/messages/:id to /messages/:id */}
//         		<Redirect from="messages/:id" to="/messages/:id" />
// 			</Route>
// 		</Route>
// 	</Router>
// ), document.querySelector('#app'));

ReactDom.render(<Router history={browserHistory} routes={routes} />, document.querySelector('#app'));

