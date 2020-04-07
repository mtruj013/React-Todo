import React from 'react'
// will hold your input field and your Add Todo and Clear Completed buttons
class ListForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todo: ''
        };
    }

    handleChanges = event => {
        this.setState({ [event.target.name] : event.target.value})
    }

    submitTodo = event => {
        event.preventDefault();
        this.setState({ todo: ''});
        this.props.addTodo(event, this.state.todo);
    }

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.state.todo}
                    name="todo"
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
            
        )
    }

}
export default ListForm;