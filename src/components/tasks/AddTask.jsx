import React, { Component } from 'react';
import { addTask } from '../../actions/taskActions';
import { connect } from 'react-redux';
class AddTask extends Component {
    state = {
        task: '',
        checked: 'false'
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }
    handleSubmmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        document.getElementById('addTaskForm').reset();
        console.log(this.state);
    }
    render() {
        return (<>
            <form
                id='addTaskForm'
                onSubmit={this.handleSubmmit}
                className='container'
                autoComplete='off'
                style={{ margin: 'auto' }}>
                <div className='text-center' className="form-group">
                    <label htmlFor="task">Enter task</label>
                    <input type="texxt"
                        className="form-control ml-3"
                        id="task"
                        onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (task) => dispatch(addTask(task)),
    };
  };
  export default connect(null, mapDispatchToProps)(AddTask);