import '../css/header.less';
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {
			current: props.selectedItem || '/about',
			items: [
				{
					to: '/about',
					name: 'About'
				},
				{
					to: '/inbox',
					name: 'Inbox'
				},
				{
					to: '/message/1',
					name: 'Message'
				}
			]
		};
	}
	render() {
		return (
			<header className="header-view">
				<span className="header-logo"></span>
				<nav>
					<ul className="header-navs">{this.state.items.map((item) => 
						<li key={item.to} className={this.state.current === item.to ? 'selected' : ''} onClick={this.selectItem.bind(null, item.to)}><Link to={item.to}>{item.name}</Link></li>
					)}
					</ul>
				</nav>
			</header>
		);
	}
	selectItem = (hash, e) => {
		this.state.current = hash;
	};
}