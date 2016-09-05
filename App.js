import React from 'react';

// Stateless function component
// When using lots of markup you need a containing div so that it can be transpiled into JS

// const App = () => (
//     <div>
//         <div>Hello {this.props.name}</div>
//         <p>This is the app component</p>
//     </div>
// )

// Basic component

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name : 'User'
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({name: e.target.value})
    }
    componentWillMount() {
        console.log('mounting');
    }
    componentDidMount() {
        console.log('mounted');
    }
    componentWillUnmount() {
        console.log('unmounted');
    }
    render () {
        console.log('rendering');
        // Returning JSX which gets transpiled into Javascript
        return (
            <div>
                <div><Fire /> React.js</div>
                <p>There are two widgets on this page. As can be seen they both update the state of the parent components (App)</p>
                <Widget name={this.state.name} update={this.update}/>
                <Widget name={this.state.name} update={this.update}/>
                <Widget name={this.state.name} update={this.update}/>
            </div>
        )
        // Another way: React.createElement('h1', null, 'Hello World')
    }
}

App.propTypes = {
    // Required value for the component
    name: React.PropTypes.string.isRequired
}

const Widget = (props) => {
    return (
        <div>
            <strong>Please enter your name: </strong>
            <input type="text" onChange={props.update} />
            <div>Hello {props.name}</div>
        </div>
    )
}

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

const Fire = () => <span className="glyphicon glyphicon-fire"></span>

export default App
