import React, { useState } from 'react'
import Categories from './components/Categories'
import Menu from './components/Menu'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if(category==='all'){
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>menu</h2>
          <div className="undeline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items= {menuItems} />
      </section>
    </main>
  )
}

export default App
