import { Component } from 'react';
// import './employees-add-form.css';
import './employees-add-form.scss';

export default class EmployeesAddForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            addName: '',
            addSalary: 0
        }
    }

    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value.replace(/^0+/, '')   
        });
    }

    onAddEmployee = (e) => {
        e.preventDefault();
        if (this.state.addName !== '' && this.state.addSalary > 0) {
            this.props.onAddClick(this.state.addName, this.state.addSalary);
            this.setState({
                addName: '',
                addSalary: 0
            });
        }
    }

    static log;

    static onLog = () => {
        console.log(this.log);
    }

    static onSet = (p) => {
        this.log = p;
    }



    render() {
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        name='addName'
                        className="form-control new-post-label"
                        placeholder="What's their name?" 
                        onChange={this.onInput}
                        value={this.state.addName} />
                    <input type="number"
                        name='addSalary'
                        className="form-control new-post-label"
                        placeholder="Salary ($)?"
                        onChange={this.onInput} 
                        value={this.state.addSalary} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onAddEmployee}>
                                Add
                    </button>
                </form>
            </div>
        )
    }
}

EmployeesAddForm.onSet(666);
EmployeesAddForm.onLog();
