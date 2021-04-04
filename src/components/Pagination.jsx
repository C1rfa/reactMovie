import React from 'react';

import rightPic from './../img/right-arrow.svg';
import leftPic from './../img/left-arrow.svg';

import { MovieContext } from './../context';

export const Pagination = props => {
    const { currentPage, totalResults, sendRequest,  } = React.useContext(MovieContext);
    const countPage = Math.ceil(totalResults / 10);

    let leftBound;
    let rightBound;
    let pages = [];

    const clickHanlder = e => {
        if (e.target.innerHTML !== currentPage) {
            if(e.target.closest('li').id === 'fastForward') {
                sendRequest(countPage);
            } else if (e.target.closest('li').id === 'fastBackward') {
                sendRequest(1);
            } else {
                sendRequest(+e.target.innerHTML);
            }
        }
    }

    if(countPage > 5) {
        if((currentPage + 4) > countPage ) {
            leftBound = countPage - 4;
            rightBound = countPage;
        } else {
            leftBound = currentPage;
            rightBound = currentPage + 4;
        }
    } else {
        leftBound = 1;
        rightBound = countPage;
    }

    
    for (let i = leftBound; i <= rightBound; i++ ) {
        pages.push(<li className={ +currentPage === i ? "active-page" : "page" } key={ i } onClick={ clickHanlder }>{ i }</li>);
    }


    return(
        <ul className="pagination">
            <li className={ currentPage === 1 ? "disabled-page" : "page-backward" } id="fastBackward" onClick={ clickHanlder.bind(this) }><img className="page-icon" alt='backward' src={ leftPic }></img></li>
                { pages }
            <li className={ currentPage === countPage ? "disabled-page" : "page-forward" } id="fastForward" onClick={ clickHanlder.bind(this) }><img className="page-icon" alt='forward' src={ rightPic }></img></li>
        </ul>   
    );
};
