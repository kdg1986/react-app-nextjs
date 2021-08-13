import Link from 'next/link'

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <br />
      <Link href="/inbox">inbox</Link>
    </div>
  )
}

export default HomePage