import React, { memo } from 'react';

const Footer = memo(props =>{
    const { status, setStatusFilter, numOfTodosLeft, numOfTodos, clearCompleted } = props
    const filterBtns = [{
        title: 'All',
        isactive: status === 'ALL',
        onClick: () =>setStatusFilter('ALL'),
        link: 'All'
    },{
        title: 'Active',
        isactive: status === 'ACTIVE',
        onClick: () =>setStatusFilter('ACTIVE'),
        link: 'Active'
    },{
        title: 'Done',
        isactive: status === 'COMPLETED',
        onClick: () =>setStatusFilter('COMPLETED'),
        link: 'Done'
    },]

    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                
                <span>{numOfTodosLeft <= 1 ? ' item' : ' items'}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                {
                    filterBtns.map(btn =>(
                        <FilterBtn 
                        key={`btn${btn.title}`}
                        {...btn}
                        />
                    ))
                }
            </ul>
            {numOfTodos > numOfTodosLeft && <button className="clear-completed" onClick={clearCompleted}>Clear All Done</button>}
            {/* onClick={clearCompleted} */}
        </footer>
    )
})

const FilterBtn = memo(props => {
    const {title, isactive, link, onClick} = props
    return (
        <>
            <li>
                <a  href={`#/${link}`} 
                    className={`${isactive ? 'selected' : ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
            <span></span>
        </>
    )
})

export default Footer;