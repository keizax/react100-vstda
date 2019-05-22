import React from 'react';

function handlePriorityColor(priority) {
  if (priority == 1) {
    return 'success';
  } else if (priority == 2) {
    return 'warning';
  } else if (priority == 3) {
    return 'danger';
  }
}

function handleCompletedTodo(completedTodo) {
  if (completedTodo === true) {
    return 'line-through';
  } else {
    return '';
  }
}

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
      priority: this.props.priority,
      toggleDisplay: false,
      completedTodo: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditDisplay = this.handleEditDisplay.bind(this);
    this.handleCrossedOut = this.handleCrossedOut.bind(this);
  }

  handleEdit(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditDisplay() {
    this.props.handleSave(
      this.state.description,
      this.state.priority,
      this.props.id
    );
    this.setState({
      toggleDisplay: !this.state.toggleDisplay
    });
  }

  handleCrossedOut() {
    this.setState({
      completedTodo: !this.state.completedTodo
    });
  }

  render() {
    return (
      <div>
        <li
          className={ `list-group-item-${handlePriorityColor(
            this.state.priority
          )} clearfix` }
        >
          <input
            type='checkbox'
            style={ {
              marginleft: 10
            } }
            value={ this.state.completedTodo }
            onChange={ () => this.handleCrossedOut() }
          />
          <span
            style={ {
              textDecoration: `${handleCompletedTodo(this.state.completedTodo)}`
            } }
          >
            {this.props.description}
          </span>
          <a
            className='delete-todo list-group-item-danger pull-right'
            style={ {
              marginRight: 10
            } }
            onClick={ () => this.props.handleDelete(this.props.id) }
          >
            <span className='glyphicon glyphicon-trash' />
          </a>

          <a
            className='edit-todo list-group-item-success pull-right'
            style={ {
              marginRight: 10
            } }
            value={ this.state.toggleDisplay }
            onClick={ () => this.handleEditDisplay() }
          >
            <span className='glyphicon glyphicon-edit' />
          </a>
        </li>

        {this.state.toggleDisplay ? (
          <div
            className={ `alert-${handlePriorityColor(
              this.state.priority
            )} clearfix` }
          >
            <div className='form-group col-md-10'>
              <label htmlFor='update-todo-text'>Description</label>
              <textarea
                className='update-todo-text form-control'
                name='description'
                type='string'
                value={ this.state.description }
                onChange={ this.handleEdit }
              />
            </div>

            <div className='form-group col-md-10'>
              <label htmlFor='update-todo-priority'>
                How much of a priority is this?
              </label>
              <select
                className='update-todo-priority form-control'
                name='priority'
                value={ this.state.priority }
                onChange={ this.handleEdit }
              >
                <option>Select a priority</option>
                <option value='1'>Low priority</option>
                <option value='2'>Medium priority</option>
                <option value='3'>High priority</option>
              </select>
            </div>

            <button
              className='update-todo btn btn-success pull-right pull-bottom'
              style={ {
                marginRight: 20,
                marginBottom: 10
              } }
              name='button'
              type='submit'
              onClick={ () => this.handleEditDisplay() }
            >
              Save!
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ListTodo;
