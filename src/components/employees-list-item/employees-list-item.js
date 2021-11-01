import './employees-list-item.css';

const EmployeesListItem = ({name, salary, bonus, id, like, onToggle, onDeleteClick, onSalaryChange}) => {
    let classesLi = "list-group-item d-flex justify-content-between" + (bonus ? ' increase' : '');
    classesLi += like ? ' like' : ''

    return (
        <li className={classesLi}>

            <span
                tabIndex={0}  
                className="list-group-item-label"
                onClick={onToggle}
                data-toggle='like'
                style={{fontSize: 40}}>
                    {name}
            </span>

            <input 
                type="text" 
                className="list-group-item-input" 
                onChange={ (e) => onSalaryChange(e.target.value, id)}
                value={`${salary}$`}
            />

            <div className='d-flex justify-content-center align-items-center'>

                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggle}
                    data-toggle='bonus'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={ () => onDeleteClick(id) }>
                    <i className="fas fa-trash"></i>
                </button>
                
                <i className="fas fa-star"></i>

            </div>
        </li>
    );
}

export default EmployeesListItem;