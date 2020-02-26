import React from "react";
import css from "./Pagination.module.css";

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let visionPages = [
        ...pages.slice(props.currentPage - 1, props.currentPage + 2),
        '...',
        ...pages.slice(-3)
    ];

    let pagesNumbers = visionPages.map(p => {
        return <span
            key={p}
            className={props.currentPage === p ? css.selectPage : ''}
            onClick={() => changePage(p)}
        >{p} </span>
    });

    let changePage = (currentPage) => {
        props.getUsers(currentPage);
        props.changeCurrentPage(currentPage);
    };

    let backPage = (currentPage) => {
        props.getUsers(currentPage - 1);
        props.changeCurrentPage(currentPage - 1);
    };

    let forwardPage = (currentPage) => {
        props.getUsers(currentPage + 1);
        props.changeCurrentPage(currentPage + 1);
    };

    return (
        <span>
            <span onClick={() => backPage(props.currentPage)}>{'<'} </span>
            {pagesNumbers}
            <span onClick={() => forwardPage(props.currentPage)}> {'>'}</span>
        </span>
    )
};


export default Pagination;