import React from 'react'

const Welcome = ({ name }) => {
  return (
    <h1>
      Hello {name}
    </h1>
  )
}

const FuncComponent = () => {
  return (
    <>
      <Welcome name="Eshmat" />
      <Welcome name="Toshmat" />
      <Welcome name="G'ishmat" />
      <Welcome name="Hasan" />
      <Welcome name="Husan" />
    </>
  )
}

export default FuncComponent
