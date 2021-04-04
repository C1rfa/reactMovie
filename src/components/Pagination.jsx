import React from 'react';

import rightPic from './../img/right-arrow.svg';
import leftPic from './../img/left-arrow.svg';

class Pagination extends React.Component {


    clickHanlder(e) {

        const { countPage } = this.props;

        if(e.target.closest('li').id === 'fastForward') {
            this.props.pageFunc(countPage);
        } else if (e.target.closest('li').id === 'fastBackward') {
            this.props.pageFunc(1);
        } else {
            this.props.pageFunc(e.target.innerHTML);
        }
    }


    render() {
        const { currentPage, countPage} = this.props;

        let leftBound;
        let rightBound;
        let pages = [];

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
            pages.push(<li className={currentPage === i ? "active-page" : "page" } key={ i } onClick={ this.clickHanlder.bind(this) }>{ i }</li>);
        }


        return(
            <ul className="pagination">
                <li className={ currentPage === 1 ? "disabled-page" : "page-backward" } id="fastBackward" onClick={ this.clickHanlder.bind(this) }><img className="page-icon" alt='backward' src={ leftPic }></img></li>
                    { pages }
                <li className={ currentPage === countPage ? "disabled-page" : "page-forward" } id="fastForward" onClick={ this.clickHanlder.bind(this) }><img className="page-icon" alt='forward' src={ rightPic }></img></li>
            </ul> 
        );
    }


}

export default Pagination;
