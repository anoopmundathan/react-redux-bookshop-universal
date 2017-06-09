import React, {Component} from 'react';

export default class App extends Component {
	
	constructor() {
		super();
		this.state = {
			persons: []
		}
	}
	
	componentDidMount() {

		fetch('/api')
			.then(data => data.json())
			.then(persons => this.setState({
				persons: this.state.persons.concat(persons)
			}));
	}
	render() {
		const list = this.state.persons.map(p => {
			let key = Math.floor(Math.random() * 100)
			return <li key={key}>{p.firstname + p.lastname }</li>
		});
		return(
			<div>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}