import React from 'react';

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
        pages.push(<li className={ +currentPage === i ? "active red" : "waves-effect" } key={ i } onClick={ clickHanlder }>{ i }</li>);
    }


    return(
        <div className="message">
            <ul className="pagination">
                <li className={ currentPage === 1 ? "disabled" : "waves-effect" } id="fastBackward" onClick={ clickHanlder }><i className="material-icons">chevron_left</i></li>
                    { pages }
                <li className={ currentPage === 1 ? "disabled" : "waves-effect" } id="fastForward" onClick={ clickHanlder }><i className="material-icons">chevron_right</i></li>
            </ul> 
        </div>
        
    );
};
