import { withRouter } from 'next/router'

const ActiveLink = ({ router, href, children }) => {
  ;(function prefetchPages() {
    if (typeof window !== 'undefined') {
      router.prefetch(router.pathname)
    }
  })()

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  const isCurrentPath = router.pathname === href || router.asPath === href

  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: 'none',
          margin: 0,
          padding: 0,
          fontWeight: isCurrentPath ? 'bold' : 'normal',
          color: isCurrentPath ? '#C62828' : '#FFF',
        }}
      >
        {children}
      </a>
    </div>
  )
}

export default withRouter(ActiveLink)
