import React, { Component } from 'react';
import Task from '../task/task';
import taskData from '../../data/taskData';

class Table extends Component {
    constructor() {
        super()
        this.state = {
            tasks: taskData,
            type: '',
            done: false,
            subject: '',
            priority: '',
            dueDate: '',
            status: '',
            completePerc: '',
            modifiedDate: '',
            modifiedTime: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.setState(
            state => {
                console.log(this.state.tasks)
                var date = new Date();
                let asd = date.getFullYear() + date.getMonth() + date.getDate();
                console.log(asd.toString());
                const addTask = state.tasks.concat([{
                    id: this.state.tasks[this.state.tasks.length-1].id+1,
                    type: this.state.type,
                    done: this.state.done,
                    subject: this.state.subject,
                    priority: this.state.priority,
                    dueDate: this.state.dueDate,
                    status: this.state.status,
                    completePerc: this.state.completePerc? this.state.completePerc:0,
                    modifiedDate: date.toLocaleString(),
                    modifiedTime: ''
                }])
                console.log(this.state.tasks)
                return {
                    tasks: addTask,
                    type: '',
                    done: false,
                    subject: '',
                    priority: '',
                    dueDate: '',
                    status: '',
                    completePerc: '',
                    modifiedDate: '',
                    modifiedTime: ''
                }
            }
        )
    }

    handleDelete(id){
        console.log(id)
        let temp = this.state.tasks;
        console.log(temp)
        temp = temp.filter(task => task.id !== id)
        console.log(temp)
        this.setState({
            tasks: temp
        })
    }

    handleChange(id){
        let temp = this.state.tasks;
        // temp[id].completePerc = 100;
        temp.find(task => task.id===id).completePerc = 100;
        console.log(id);
        this.setState({
            tasks: temp
        })
    }

    render() {
        let taskComponents = this.state.tasks.map(task =>
            <Task
                id={task.id}
                type={task.type}
                done={task.done}
                subject={task.subject}
                priority={task.priority}
                dueDate={task.dueDate}
                status={task.status}
                completePerc={task.completePerc}
                modifiedDate={task.modifiedDate}
                modifiedTime={task.modifiedTime}
                handleChange={this.handleChange}
                handleDelete={this.handleDelete}
            />
        )
        return (
            <div>
                <section>
                    <h1 className='text-center'>Schedule</h1>
                    <form action="#" >
                        <input type="text" id="ttype" name="type" placeholder="Type"
                            value={this.state.type}
                            onChange={e => this.setState({ type: parseInt(e.target.value) })}
                        />
                        <input type="text" id="tsubject" name="subject" placeholder="Subject"
                            value={this.state.subject}
                            onChange={e => this.setState({ subject: e.target.value })}
                        />
                        <input type="text" id="tpriority" name="priority" placeholder="Priority"
                            value={this.state.priority}
                            onChange={e => this.setState({ priority: parseInt(e.target.value) })}
                        />
                        <input type="text" id="tduedate" name="duedate" placeholder="Due Date"
                            value={this.state.dueDate}
                            onChange={e => this.setState({ dueDate: e.target.value })}
                        />
                        <input type="text" id="tstatus" name="status" placeholder="Status"
                            value={this.state.status}
                            onChange={e => this.setState({ status: parseInt(e.target.value) })}
                        />
                        <input type="text" id="tcompletePerc" name="completePerc" placeholder="Percent complete"
                            value={this.state.completePerc}
                            onChange={e => this.setState({ completePerc: parseInt(e.target.value) })}
                        />
                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Siųsti" />
                    </form >
                </section>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'><i className="fas fa-chart-bar"></i></th>
                            <th scope='col'>Subject</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Due Date</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Percent Completed</th>
                            <th scope='col'>Modified on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskComponents}
                    </tbody>
                </table>
            </div>
        )
    }


}

export default Table;