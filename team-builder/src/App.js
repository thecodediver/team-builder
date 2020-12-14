import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember'
import styled from 'styled-components'
import Form from './Form'

const StyledApp = styled.div`
  
`

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Mike",
      email: "mikeiglasius@gmail.com",
      role: "Developer"
    },
    {
      name: "Matt",
      email: "mattyFresh@gmail.com",
      role: "User Interface Design"
    },
  ])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  })

  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: ""
  })

  function handleEdit(e) {
    setMemberToEdit({
      name: e.target.dataset.name,
      email: e.target.dataset.email,
      role: e.target.dataset.role
    })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function addTeamMember(name, email, role) {
    setTeamMembers([
      ...teamMembers,
      {
        name: name,
        email: email,
        role: role
      }
    ])
    setFormData({
      name: "",
      email: "",
      role: ""
    })
  }

  useEffect(() => {
    setFormData(memberToEdit)
  }, [memberToEdit])

  return (
    <StyledApp className="App">
      {teamMembers.map(item => <TeamMember handleEdit={handleEdit} key={item.name} info={item} />)}
      <Form handleSubmit={addTeamMember} formData={formData} handleChange={handleChange}/>
    </StyledApp>
  );
}

export default App;
