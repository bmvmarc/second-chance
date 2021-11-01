import { Component } from 'react';
import nextId from 'react-id-generator';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 0, name: 'Mike', salary: 1000, bonus: false, like: false},
                {id: 1, name: 'Sarah', salary: 33000, bonus: false, like: false},
                {id: 2, name: 'Isabella', salary: 210000, bonus: true, like: false}               
            ],
            term: '',
            filter: 'all'
        }    
    }
    
    onToggle = (propName, id) => {
        this.setState(({data}) => ({
            data: data.map(i => (i.id !== id ? i : {...i, [propName]: !i[propName]}))
        }));
    }
    
    onDeleteClick = (id) => {
        this.setState(({data}) => ({
            data: data.filter(i => i.id !== id)
        }));
    }

    onAddClick = (n, s) => {
        this.setState(
            ({data}) => ({
                data: [...data, {id: nextId('emp-'), name: n, salary: s, bonus: false, like: false} ]
            }));
    }

    onTermChange = (term) => {
        this.setState({term: term.toUpperCase()});
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    }    

    setSearchFilter = (arr, term, filter) => {
        const newData = arr.filter(i => i.name.toUpperCase().includes(term));
        switch (filter) {
            case ('with-bonus'):
                return newData.filter(i => i.bonus);

            case ('more-than-1000'):
                return newData.filter(i => i.salary > 1000);
                
            default:
                return newData;
        }
    }
    onSalaryChange = (salary, id) => {

        const sal = salary.replace(/\D/g,'').replace('$', '');

        this.setState(({data}) => { 
            const index = data.findIndex(i => i.id === id);
            return {
                data: [...data.slice(0, index),
                    {...data[index], salary: sal},
                    ...data.slice(index + 1)]
            }
        });        
    }

    render() {

        const {data, term, filter} = this.state;

        const dataSearchFilter = this.setSearchFilter(data, term, filter);

        return (
            <div className='app'>
                <AppInfo 
                    emploeesNumber={data.length} 
                    emploeesWithBonusNumber={data.filter(i => i.bonus).length}/>
    
                <div className="search-panel">
                    <SearchPanel onTermChange={this.onTermChange} />
                    <AppFilter onFilterChange={this.onFilterChange} />
                </div>
    
                <EmployeesList 
                    data={dataSearchFilter} 
                    onToggle={this.onToggle}
                    onDeleteClick={this.onDeleteClick}
                    onSalaryChange={this.onSalaryChange}
                />
    
                <EmployeesAddForm onAddClick={this.onAddClick}/>
    
            </div>
        );
    }
}


