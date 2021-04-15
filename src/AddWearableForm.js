import React from 'react'

export const AddWearableForm = () => {
  const [name, setName] = React.useState(``)
  const [description, setDescription] = React.useState(``)
  const [price, setPrice] = React.useState(0)

  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: `lightgrey`, padding: 30, marginTop: 40 }}
    >
      <h2>Add wearable</h2>
      <div>
        <div><label>Name</label></div>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          value={name}
        />
      </div>

      <div>
        <div><label>Description</label></div>
        <input
          onChange={e => setDescription(e.target.value)}
          type="text"
          value={description}
        />
      </div>

      <div>
        <div><label>Price</label></div>
        <input
          onChange={e => setPrice(e.target.value)}
          type="text"
          value={price}
        />
      </div>
      <button type="submit">Sign up</button>
    </form>
  )

  function handleSubmit(e) {
    e.preventDefault()
    // add wearable
    console.log(`adding wearable`)
  }
}
