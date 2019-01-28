import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
		}
	
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
				return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<Cardlist robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
} 

export default App;