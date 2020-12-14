import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  form {
    margin: 10px auto;
    width: 30%;
  }
  .inputContainer {
    text-align: center;
    input {
      padding: 5px;
      margin: 5px;
      box-shadow: 1px 1px 3px black;
    }
    select {
      box-shadow: 1px 1px 3px black;
      padding: 5px 0px;
      border: 1px solid black;
    }
  }
  .submitContainer {
    text-align: center;
    input {
      padding: 10px 20px;
      margin: 10px;
      background-color: #333;
      color: white;
      font-size: 2rem;
      box-shadow: 1px 1px 3px black;
      &:hover {
        background-color: #111;
      }
    }
  }
`

function Form(props) {
  function handleChange(e) {
    e.preventDefault()
    props.handleSubmit(props.formData.name, props.formData.email, props.formData.role)
  }
  return (
    <StyledForm className="formContainer">
      <form>
        <div className="inputContainer">
          <input name="name" id="name" placeholder="Name" value={props.formData.name} onChange={e => props.handleChange(e)}/>
        </div>
        <div className="inputContainer">
          <input type="email" name="email" id="email" placeholder="Email" value={props.formData.email} onChange={e => props.handleChange(e)}/>
        </div>
        <div className="inputContainer">
          <select name="role" id="role" value={props.formData.role} onChange={e => props.handleChange(e)}>
            <option>---Select Role---</option>
            <option value="Developer">Developer</option>
            <option value="User Interface Design">User Interface Design</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="React FrontEnd">React FrontEnd</option>
          </select>
        </div>
        <div className="submitContainer">
          <input type="submit" id="submit" name="submit" onClick={handleChange} />
        </div>
      </form>
    </StyledForm>
  )
}

export default Form