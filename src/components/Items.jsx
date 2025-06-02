import React from 'react'

function Items({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className={`item ${item.packed ? 'packed' : ''}`}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <div className="item-actions">
        <button
          className="delete-btn"
          title="Zap this item!"
          onClick={() => onDeleteItem(item.id)}
        >
          &#128465;
        </button>
      </div>
    </li>
  )
}

export default Items
