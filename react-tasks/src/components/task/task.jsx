import React, { Component } from 'react';
import styles from './task.scss';

var priority;
var type;
var status;
let complete = '';

class Task extends Component {
    constructor() {
        super()
        this.state = {
        }
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck = e => {
        // e.currentTarget.parentNode.classList.add('taskComplete');
    }
    render() {
        switch (this.props.priority) {
            case 1:
                priority = 'prioLow';
                break;
            case 2:
                priority = 'prioNormal';
                break;
            case 3:
                priority = 'prioHigh';
                break;
            default:
                priority = 'prioLow';
        }
        switch (this.props.type) {
            case 1:
                type = 'fas fa-check-square';
                break;
            case 2:
                type = 'fas fa-gem';
                break;
            default:
                type = 'fas fa-check-square';
        }
        switch (this.props.status) {
            case 1:
                status = 'new';
                break;
            case 2:
                status = 'in-progress';
                break;
            case 3:
                status = 'complete';
                break;
            default:
                status = 'new';
        }
        if (this.props.completePerc === 100) complete = 'taskComplete';
        else complete = 'incomplete';
        return (
            <tr>
                <th scope='row' className='text-center'><i className={type}></i></th>
                <td className={complete}><i className="fas fa-check pr-3" onClick={() => this.props.handleChange(this.props.id)}/*{e => this.handleCheck(e)}*/> </i>{this.props.subject}</td>
                <td className={priority}></td>
                <td>{this.props.dueDate}</td>
                <td className={status}></td>
                <td>
                    <div className="row">
                        <div className="col-3 p-0">
                            {this.props.completePerc}%
                        </div>
                        <div className="col-9 p-0 pb-0 pt-auto mb-1 mt-auto">
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: this.props.completePerc + '%' }} aria-valuenow={this.props.completePerc} aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>{this.props.modifiedDate} {this.props.modifiedTime}</td>
                <td><i className="fas fa-trash-alt" onClick={() => this.props.handleDelete(this.props.id)}></i></td>
            </tr>
        )
    }

}

export default Task;