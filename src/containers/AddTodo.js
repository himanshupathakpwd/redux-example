import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import PropTypes from 'prop-types'

let AddTodo = ({ dispatch }) => {
  let input

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

AddTodo = connect()(AddTodo)

export default AddTodo