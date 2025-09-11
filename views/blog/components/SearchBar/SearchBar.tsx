import React, { SetStateAction } from 'react'
import styles from './SearchBar.module.css'
import { MaskedIcon } from '@/common/components/Icon'

interface SearchBarProps {
  search: string
  setSearch: React.Dispatch<SetStateAction<string>>
  handleSearch: React.FormEventHandler<HTMLFormElement>
}

const SearchBar: React.FC<SearchBarProps> = ({
  search,
  setSearch,
  handleSearch,
}) => {
  return (
    <form onSubmit={handleSearch} className={`${styles['search-bar']}`}>
      <label htmlFor='search'>
        {/* <MagnifierIcon width={26} height={26} /> */}
        {/* <MaskedIcon
          size={26}
          customSrc='https://img.devcorner.top/icons/magnifier.svg'
        /> */}
        <MaskedIcon
          size={26}
          customSrc='https://img.devcorner.top/icons/magnifier.svg'
        />
      </label>
      <input
        id='search'
        type='search'
        placeholder={'Search'}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </form>
  )
}

export default SearchBar
