import React from 'react'
function Footer({ data, sortBy, setSortBy, onClearList }) {
  // items length
  const dataLength = data.length
  //  packedItem
  const packedItemLength = data.filter((item) => item.packed).length

  return (
    <footer>
      <p className="list-info">
        Looks like you have {dataLength} goofy item{dataLength > 1 ? 's' : ''},{' '}
        {packedItemLength} of which is done!
      </p>
      <div className="footer-actions">
        <select
          className="sort-btn"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">sort by input</option>
          <option value="alphabet">sort by alphabet</option>
          <option value="packed">sort by packed</option>
        </select>
        <button className="clear-btn" onClick={onClearList}>
          Wipe the Slate Clean!
        </button>
      </div>
    </footer>
  )
}

export default Footer
