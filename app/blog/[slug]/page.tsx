import BlogBySlug from '@/views/blogBySlug'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  return <BlogBySlug slug={slug} />
}
