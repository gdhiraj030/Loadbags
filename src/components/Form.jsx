import { nanoid } from 'nanoid'
import React from 'react'
import { useState } from 'react'

function Form({ onAddItem }) {
  // description state
  const [quantity, setQuantity] = useState('')
  const [description, setDescription] = useState('')
  // handle Form submit
  function handleSubmit(e) {
    e.preventDefault()
    // validation with guard clauss
    if (!description.trim()) return
    // creating new Item
    const numberQuantity = Number(quantity) || 1
    const newItem = {
      id: nanoid(),
      description,
      quantity: numberQuantity,
      packed: false,
    }
    // lifting new item
    onAddItem(newItem)
    // reseting input
    setQuantity('')
    setDescription('')
  }
  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input
        type="number"
        id="quantity"
        min="1"
        placeholder="Qty"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        id="description"
        placeholder="What's on your wacky list?"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Items!</button>
    </form>
  )
}

export default Form
