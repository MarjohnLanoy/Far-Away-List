export function Items({ item, setItems }) {
  const { id, description, quantity, packed } = item

  function handleDeleteList(id) {
    const confirmed = window.confirm(`Click Yes if you want to proceed`)

    if (confirmed)
      setItems((item) => {
        return item.filter((item) => item.id !== id && item)
      })
  }

  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  return (
    <>
      <li>
        <input
          checked={packed}
          onChange={() => handleTogglePacked(id)}
          type="checkbox"
        />
        <span style={packed ? { textDecoration: "line-through" } : null}>
          ({quantity}) {description}
        </span>
        <button onClick={() => handleDeleteList(id)}> ❌</button>
      </li>
    </>
  )
}
