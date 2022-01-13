import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <i className="fas fa-envelope" href={`mailto:${siteMetadata.email}`}></i>
          <i className="fab fa-github" href={siteMetadata.github}></i>
          <i className="fab fa-linkedin" href={siteMetadata.linkedin}></i>
          <i className="fab fa-twitter" href={siteMetadata.twitter}></i>
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">Made with ❤️ on earth by humans</div>
      </div>
    </footer>
  )
}
