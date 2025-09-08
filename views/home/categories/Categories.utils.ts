interface Category {
  title: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    title: 'Frontend frameworks',
    description:
      'Stay ahead with the latest in frontend technology! From React to Vue, learn what powers interactive, sleek, and fast user experiences.',
    icon: 'https://devcorner-blog.s3.us-east-1.amazonaws.com/icons/image.svg',
  },
  {
    title: 'Backend Essentials',
    description:
      "Explore the foundations that support every application. Whether it's databases, servers, or APIs, this category covers the essentials of building robust backends.",
    icon: 'https://devcorner-blog.s3.us-east-1.amazonaws.com/icons/gear.svg',
  },
  {
    title: 'DevOps',
    description:
      'Automate, deploy, and monitor. Discover tools and practices for seamless integration and delivery, ensuring stability and efficiency in your development cycle.',
    icon: 'https://devcorner-blog.s3.us-east-1.amazonaws.com/icons/shield.svg',
  },
]
