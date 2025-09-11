'use client'

import React, { useState } from 'react'
import { AppContainer } from '@/common/layout/AppContainer'
import { BG_STYLES_CLASSES } from '@/common/utils/enums'
import { Intro, Pagination, LoadState, SearchResults } from './components'

import { useBlogs } from './Blog.hooks'
import styles from './Blog.module.css'

export const BlogView = () => {
  const [search, setSearch] = useState<string>('')
  const {
    blogPosts,
    page,
    metaBlogs,
    DEFAULT_PAGE,
    handleFilter,
    handlePagination,
  } = useBlogs()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    handleFilter(search)
  }

  return (
    <React.Fragment>
      <AppContainer padding elementType='div' bgColor={BG_STYLES_CLASSES.DARK}>
        <Intro
          search={search}
          handleSearch={handleSearch}
          setSearch={setSearch}
        />
      </AppContainer>
      <AppContainer
        padding
        bgColor={BG_STYLES_CLASSES.LIGHT}
        elementType='section'
      >
        <div className={`${styles['blog-posts']}`}>
          {blogPosts ?
            <SearchResults results={blogPosts} />
          : <LoadState />}
        </div>
      </AppContainer>
      {metaBlogs === undefined ? null : (
        <AppContainer
          padding
          bgColor={BG_STYLES_CLASSES.LIGHT}
          elementType='section'
        >
          <Pagination
            page={page}
            metaBlogs={metaBlogs}
            handlePagination={handlePagination}
            DEFAULT_PAGE={DEFAULT_PAGE}
          />
        </AppContainer>
      )}
    </React.Fragment>
  )
}
