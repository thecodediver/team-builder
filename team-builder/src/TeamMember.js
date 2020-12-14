import React from 'react'
import styled from 'styled-components'

const StyledTeamMember = styled.div`
  width: 40%;
  margin: 10px auto;
  background-color: #333;
  color: white;
  border-radius: 10px;
  padding: 10px;
`

function TeamMember(props) {
  return (
    <StyledTeamMember className="memberBox">
      <p>Name: {props.info.name}</p>
      <p>Email: {props.info.email}</p>
      <p>Role: {props.info.role}</p>
      <button data-name={props.info.name} data-email={props.info.email} data-role={props.info.role} onClick={e => props.handleEdit(e)}>Edit</button>
    </StyledTeamMember>
  )
}

export default TeamMember