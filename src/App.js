import { use, useEffect, useState } from "react"
import { Footer } from "./Footer"
import { PackingList } from "./PackingList"
import { Header, Form } from "./Header"

const initialItems = []

export default function App() {
  const [items, setItems] = useState(initialItems)
  return (
    <div className="app">
      <Header />
      <Form items={items} setItems={setItems} />
      <PackingList setItems={setItems} items={items} />
      <Footer items={items} />
    </div>
  )
}
