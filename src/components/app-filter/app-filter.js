import { Component } from 'react';
import './app-filter.css';

export default class AppFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {filter: 'all'};
    }

    onFilterChange = (e) => {
        const filter = e.target.name;
        this.setState({filter});
        this.props.onFilterChange(filter);
    }

    render() {
    
        const btnsData = [
            ['all',            'All employees', false],
            ['with-bonus',     'With bonus', false],
            ['more-than-1000', 'Salary above 1000$', true]];
      
        const {filter} = this.state, 
            activeClass = "btn btn-light",
            nonActiveClass = "btn btn-outline-light";

        const btns = btnsData.map((btnPoprs, key) => (
            <button 
                    key={key}
                    name={btnPoprs[0]}
                    className={filter === btnPoprs[0] ? activeClass : nonActiveClass }
                    type="button"
                    style={btnPoprs[2] ? {color: 'red'}: {}}
                    onClick={this.onFilterChange}>
                        {btnPoprs[1]}
                    
            </button>
        ));

        return (
            <div className="btn-group">
                {btns}        
            </div>
        );
    }
}

