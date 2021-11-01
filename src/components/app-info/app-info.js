import './app-info.scss';

const AppInfo = ({emploeesNumber, emploeesWithBonusNumber}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting</h1>
            <h2>Total number of employees: {emploeesNumber}</h2>
            <h2>With a bonus: {emploeesWithBonusNumber}</h2>
        </div>
    )

}

export default AppInfo;