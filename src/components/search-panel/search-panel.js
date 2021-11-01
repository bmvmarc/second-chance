import { Component } from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {

    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onTermChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onTermChange(term);
    }

    render () {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Find an employee"
                value={this.state.term}
                onChange={this.onTermChange}/>
        );
    }

}
