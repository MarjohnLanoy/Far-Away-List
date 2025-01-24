export function Footer({ items }) {
  const itemPacked = items.filter((item) => item.packed).length
  const totalPercent = (itemPacked / items.length) * 100

  const stats = items.length ? (
    <h3>
      There are {items.length} packages and {itemPacked} packed (
      {totalPercent.toFixed(2)})%
    </h3>
  ) : (
    <h3>Start adding some item to your list</h3>
  )

  return <footer className="stats">{stats}</footer>
}
