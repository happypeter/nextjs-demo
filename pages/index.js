import Link from 'next/link'
const index = () => (
  <div>
    <Link as='/v/123' href='/video?id=123'>
      <a>video page</a>
    </Link>
    <p>hello world</p>
  </div>
)

export default index
