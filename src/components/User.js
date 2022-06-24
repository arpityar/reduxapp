import React from 'react'

const User = (props) => {
  const { data } = props
  return (
    <>
      <h1>User List</h1>
      <h4>{data.name}</h4>
    </>
  )
}

export default User
