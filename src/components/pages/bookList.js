import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
	
	render() {

		const booksList = this.props.books.map(book => <li>{book.title}</li>);
		return(
			<div>
				<h1>Hello React</h1>
				<ul>
					{booksList}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ( 
	{
		books: state.book.books
	} 
);

export default connect(mapStateToProps)(BookList)