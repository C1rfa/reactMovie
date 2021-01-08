import React from 'react';

export const Pagination = props => {
    const { currentPage, countPage, pageFunc } = props;

    let leftBound;
    let rightBound;
    let pages = [];

    const clickHanlder = e => {
        if(e.target.closest('li').id === 'fastForward') {
            pageFunc(countPage);
        } else if (e.target.closest('li').id === 'fastBackward') {
            pageFunc(1);
        } else {
            pageFunc(e.target.innerHTML);
        }
    }

    if(countPage > 5) {
        if(currentPage + 4 > countPage ) {
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
        pages.push(<li className={currentPage === i ? "active red" : "waves-effect" } key={ i } onClick={ clickHanlder }>{ i }</li>);
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
