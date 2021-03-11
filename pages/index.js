import Link from 'next/link';

function Hello() {
  return (
    <>
      <h1>Hello!</h1>

      <Link href="/">
        <p>index</p>
      </Link>

      <Link href="/todo">
        <p style={{ color: 'blue' }}>Todoアプリへ</p>
      </Link>
    </>
  )
}

export default Hello;
