import React from "react";
import {searchBook} from "../redux/reducer";
import {connect} from "react-redux";




class SearchForm extends React.Component{

    onChange = (e) => {
        this.props.searchBook(e.target.value)
    };


    render() {
        return <div>
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                  <span className="input-group-text purple lighten-3" id="basic-text1">
                    <i className="fas fa-search text-white"  aria-hidden="true">
                    </i>
                  </span>
                </div>
                <input
                    onChange={this.onChange}
                    className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"/>
            </div>
        </div>
    }
}

const  mapStateToProps = (state)=>{
    debugger
    return {
        text:state.movies.text
    }
}

export default connect(mapStateToProps,{searchBook}) (SearchForm);