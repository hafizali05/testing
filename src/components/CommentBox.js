import React from 'react'


export default class CommentBox extends React.Component { 
    state  = {comment: ''};
    handleChange = event => {
        event.preventDefault();
        this.setState({comment: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({comment: ''})

    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}> 
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>
                <div>
                    <button type="submit">Submit Comment</button>
                </div>
            </form>
        )
    }
}
