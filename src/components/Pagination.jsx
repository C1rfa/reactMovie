import React from 'react';


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
            pages.push(<li className={currentPage === i ? "active red" : "waves-effect" } key={ i } onClick={ this.clickHanlder.bind(this) }>{ i }</li>);
        }


        return(
            <div className="message">
                <ul className="pagination">
                    <li className={ currentPage === 1 ? "disabled" : "waves-effect" } id="fastBackward" onClick={ this.clickHanlder.bind(this) }><i className="material-icons">chevron_left</i></li>
                        { pages }
                    <li className={ currentPage === 1 ? "disabled" : "waves-effect" } id="fastForward" onClick={ this.clickHanlder.bind(this) }><i className="material-icons">chevron_right</i></li>
                </ul> 
            </div>
            
        );
    }


}

export default Pagination;
