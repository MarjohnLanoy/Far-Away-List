import { useState } from "react"
import { Items } from "./Items"

export function PackingList({ items, setItems }) {
  function handleClearList() {
    const confirmed = window.confirm(`Click Yes if you want to proceed`)
    if (confirmed) setItems((items = []))
  }
  const [sortBy, setSortBy] = useState("unit")
  let sortedItems
  if (sortBy === `unit`) sortedItems = items
  if (sortBy === `description`)
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === `packed`)
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
      {items.length ? (
        <>
          <ul>
            {sortedItems.map((item) => (
              <Items key={item.id} setItems={setItems} item={item} />
            ))}
          </ul>
          <div className="action">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="unit"> Sort by Unit</option>
              <option value="description"> Sort by Description</option>
              <option value="packed"> Sort by packed</option>
            </select>
            <button onClick={handleClearList}>Clear List</button>
          </div>
        </>
      ) : (
        <h3>Input Some List</h3>
      )}
    </div>
  )
}
