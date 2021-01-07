import React from 'react';


class Pagination extends React.Component {


    clickHanlder(e) {

        const { type, searchText, countPage } = this.props;

        console.log(e.target.innerHTML);

        if(e.target.id === 'fastForward') {
            this.props.pageFunc(searchText, type, 1);
        } else if (e.target.id === 'fastBackward') {
            this.props.pageFunc(searchText, type, countPage);
        } else {
            this.props.pageFunc(searchText, type, e.target.innerHTML);
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
            pages.push(<li className={currentPage === i ? "active" : "waves-effect" } key={ i } onClick={ this.clickHanlder.bind(this) }>{ i }</li>);
        }


        return(
            <div className="row s12">
                <ul className="pagination ">
                    <li className={ currentPage === 1 ? "disabled" : "waves-effect" } id="fastBackward" onClick={ this.clickHanlder.bind(this) }><i className="material-icons">chevron_left</i></li>
                        { pages }
                    <li className={ currentPage === 1 ? "disabled" : "waves-effect" } id="fastForward" onClick={ this.clickHanlder.bind(this) }><i className="material-icons">chevron_right</i></li>
                </ul> 
            </div>
            
        );
    }


}

export default Pagination;
