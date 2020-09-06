import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Tasks = ({tasks}) => {
    return (<>
        <table className="table container">
            <thead>
                <tr className='text-info'>
                    <th scope="col">Tasks</th>
                    <th scope="col">Added On</th>
                    <th scope="col">Status</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {tasks && tasks.map(task => <Task task={task} key={Task.id} />)}
            </tbody>
        </table>
    </>);
}

const mapStateToProps = state =>{
    const tasks = state.firestore.ordered.tasks;
    return {
        tasks: tasks,
        // uid: state.firestore.auth.uid
    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect(ownProps => [
        {
            collection: 'tasks',
            orderBy: ['date', 'desc']
        }
    ])
)(Tasks);