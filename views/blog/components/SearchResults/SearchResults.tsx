import { PostCard } from '@/common/components/PostCard'
import { BlogPost } from '@/common/utils/types/blogPost'
import styles from './SearchResults.module.css'
import Link from 'next/link'

interface SearchResultProps {
  results: BlogPost[]
}

const SearchResult: React.FC<SearchResultProps> = ({ results }) => {
  return (
    <>
      {results.map((blogPost) => {
        return (
          <Link
            key={blogPost.slug}
            href={'/blog/' + blogPost.slug}
            className={styles['search-card-link']}
          >
            <PostCard>
              <PostCard.Image
                src={blogPost.img.src.lg}
                alt={blogPost.img.alt}
                position='bottom right'
              />
              <PostCard.Tags tags={blogPost.tags} />
              <PostCard.Author>
                {blogPost.author.name} • {blogPost.date}
              </PostCard.Author>
              <PostCard.Title headerType={'h3'}>
                {blogPost.title}
              </PostCard.Title>
              <PostCard.Description>
                {blogPost.shortDescription}
              </PostCard.Description>
            </PostCard>
          </Link>
        )
      })}
    </>
  )
}
export default SearchResult
