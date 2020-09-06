import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidDelete } from 'react-icons-kit/ionicons/androidDelete';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeTask, toggleChecked } from '../../actions/taskActions';
import Check from './Check';
// import { toggleChecked } from '../../actions/taskActions';

const Task = ({ task, removeTask, toggleChecked }) => {
    const handleRemove = task => {
        removeTask(task);
    }
    const handleCheck = task => {
        toggleChecked(task);
    }
    return (<>
        <tr>
            <th>{task.task}</th>
            <td>{moment(task.date.toDate()).calendar()}</td>
            <td><Check onClick={() => handleCheck(task)} checked={task.checked} /></td>
            <td><Icon
                style={{ cursor: 'pointer' }}
                className='text-danger'
                icon={androidDelete}
                size={32}
                onClick={() => handleRemove(task)}
            /></td>
        </tr>
    </>);
}
const mapDispatchToProps = dispatch => {
    return {
        removeTask: task => dispatch(removeTask(task)),
        toggleChecked: (task) => dispatch(toggleChecked(task))
    };
};

export default connect(null, mapDispatchToProps)(Task);
