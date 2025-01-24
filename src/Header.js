import { useState } from "react"

export function Header() {
  return <h1>Far Away</h1>
}
export function Form({ items, setItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  const newList = {
    description,
    quantity,
    packed: false,
    id: Date.now() + Math.floor(Math.random() * 1000),
  }

  function handleAddList(event) {
    event.preventDefault()
    if (!description) return
    setItems((items) => [...items, newList])
    setDescription("")
    setQuantity(1)
  }

  return (
    <form onSubmit={handleAddList} className="add-form">
      <h3>What you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }).map((_, num) => (
          <option key={num}>{num + 1}</option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="item..."
      ></input>
      <button>ADD</button>
    </form>
  )
}
