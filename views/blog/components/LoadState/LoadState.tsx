import { PostCardSkeleton } from '@/common/components/PostCardSkeleton'
import { RESPONSIVE_SIZE } from '@/common/utils/enums'
import { useScreenSize } from '@/common/utils/hooks'

const LoadState = () => {
  const { width } = useScreenSize()
  if (width <= RESPONSIVE_SIZE.SM) {
    return (
      <>
        <PostCardSkeleton />
        <PostCardSkeleton opacity='0.5' />
      </>
    )
  }
  if (width <= RESPONSIVE_SIZE.MD) {
    return (
      <>
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton opacity='0.5' />
        <PostCardSkeleton opacity='0.5' />
      </>
    )
  }
  if (width >= RESPONSIVE_SIZE.LG) {
    return (
      <>
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton opacity='0.5' />
        <PostCardSkeleton opacity='0.5' />
        <PostCardSkeleton opacity='0.5' />
      </>
    )
  }
}

export default LoadState
