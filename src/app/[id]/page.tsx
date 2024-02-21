import ErrorPage from '@/components/error-page'

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetch(`https://api.lanyard.rest/v1/users/${params.id}`)
  const res = await data.json()

  if (res.error) return <ErrorPage />

  return (
    <div className='min-h-screen grid place-items-center'>
      <pre>
        <code>{JSON.stringify(res, null, 2)}</code>
      </pre>
    </div>
  )
}
