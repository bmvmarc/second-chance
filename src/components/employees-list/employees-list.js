import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onToggle, onDeleteClick, onSalaryChange}) => {

    const dataElems = data.map(item => {
        return (<EmployeesListItem 
                    onToggle={(e) => onToggle(e.currentTarget.getAttribute('data-toggle'), item.id)} 
                    onDeleteClick={onDeleteClick} 
                    onSalaryChange={onSalaryChange}
                    key={item.id} {...item}/>);
    });

    return (
        <ul className="app-list list-group">
            {dataElems}
        </ul>
    );

}

export default EmployeesList;