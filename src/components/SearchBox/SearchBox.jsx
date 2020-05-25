import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/slices/searchSlice'
import './styles.css'

const SearchBox = () => {
  const dispatch = useDispatch()
  return (
    <input
      aria-label='search pokemon'
      onChange={e => dispatch(setSearch(e.target.value))}
      type='search'
      placeholder='search pokemon'
    />
  )
}

export default SearchBox
