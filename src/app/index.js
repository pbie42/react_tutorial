var React = require('react')
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class')

var TodoComponent = createReactClass({
	render: function () {
		return (
			<div>
				<p><strong>Cheese Name: </strong>{ this.props.cheese.name }</p>
				<p><strong>Smell Factor: </strong>{ this.props.cheese.smellFactor }</p>
				<p><strong>Price: </strong>{ this.props.cheese.price }</p>
			</div>
		)
	}
})

var myCheese = { name: 'Camembert', smellFactor: 'Extreme Pong', price: '3.50' }

ReactDOM.render(<TodoComponent msg="I like cheese" cheese={ myCheese }/>, document.getElementById('todo-wrapper'))