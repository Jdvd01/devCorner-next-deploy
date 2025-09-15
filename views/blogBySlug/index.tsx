import { MetaData } from '@/common/layout/MetaData'
import { handleRequest } from './blogBySlug.service'
import { Article, ArticleSkeleton } from './components'
import styles from './BlogPost.module.css'

interface Props {
  slug: string
}

export default async function BlogBySlug({ slug }: Props) {
  const blog = await handleRequest(slug)

  if (blog === undefined) {
    return (
      <main className={styles[`blog-post`]}>
        <ArticleSkeleton />
      </main>
    )
  }

  if (blog.title) {
    return (
      <>
        {blog.meta ?
          <MetaData meta={blog.meta.meta} og={blog.meta.og} tw={blog.meta.tw} />
        : null}
        <main className={styles[`blog-post`]}>
          <Article
            title={blog.title}
            date={blog.date}
            author={blog.author}
            shortDescription={blog.shortDescription}
            tags={blog.tags}
            img={blog.img}
            blogMd={blog.blogMd}
            id={blog.id}
            slug={blog.slug}
          />
        </main>
      </>
    )
  }
}
