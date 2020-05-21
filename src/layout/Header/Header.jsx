import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import SearchBox from '../../components/SearchBox/SearchBox'

const Header = () => {
  return (
    <header>
      <h1 className='f1'>Pokedex</h1>
      <SearchBox />
      <div className='pages'>
        <Link to='/'>Page 1</Link>
        <Link to='/page2'>Page 2</Link>
        <Link to='/page3'>Page 3</Link>
        <Link to='/page4'>Page 4</Link>
        <Link to='/page5'>Page 5</Link>
        <Link to='/page6'>Page 6</Link>
      </div>
    </header>
  )
}

export default Header
