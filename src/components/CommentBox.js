import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


class CommentBox extends React.Component { 
    state  = {comment: ''};
    handleChange = event => {
        event.preventDefault();
        this.setState({comment: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''})

    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}> 
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                <div>
                    <button type="submit">Submit Comment</button>
                    <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comment</button>
                </div>
            </form>
        )
    }
}
export default connect(null,actions)(CommentBox);