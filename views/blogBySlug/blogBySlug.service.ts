import { BlogPost } from '@/common/utils/types/blogPost'
import { cmsClient } from '@/services/cms/cmsService'
import { redirect, RedirectType } from 'next/navigation'

export const handleRequest = async (slug: string): Promise<BlogPost> => {
  const response = await cmsClient.getBlogPost({ slug })

  if (response.success === false) {
    console.log('Error en la solicitud')
    redirect('/blog', RedirectType.push)
  }

  return response.data
}
