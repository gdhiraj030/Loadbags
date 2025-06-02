import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import Footer from './components/Footer'
import Overlay from './components/Overlay'
import Items from './components/Items'
import { useState } from 'react'

function App() {
  // states
  const [data, setData] = useState([])
  const [showOverlay, setShowOverlay] = useState(false)
  const [sortBy, setSortBy] = useState('input')

  // sorted data
  let sortedData = [...data]
  if (data.length > 0) {
    if (sortBy === 'alphabet') {
      sortedData.sort((a, b) => a.description.localeCompare(b.description))
    }
    if (sortBy === 'packed')
      sortedData.sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  // handler functions
  function handleAddItem(newItem) {
    setData((prev) => [...prev, newItem])
  }
  function handleToggleItem(id) {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }
  function handleDeleteItem(id) {
    setData((prev) => prev.filter((item) => item.id !== id))
  }

  function handleConfirm() {
    setData([])
    setShowOverlay(false)
  }
  function handleCancel() {
    setShowOverlay(false)
  }
  function handleClearList() {
    if (data.length === 0) return
    setShowOverlay(true)
  }
  return (
    <div className="app-container">
      {showOverlay && data.length > 0 && (
        <Overlay
          showOverlay={showOverlay}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <Header />
      <Form onAddItem={handleAddItem} />
      <List>
        {sortedData.map((item) => (
          <Items
            key={item.id}
            item={item}
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </List>
      <Footer
        data={data}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onClearList={handleClearList}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  )
}

export default App
