import { useQuery } from 'atomiql'
import { AUTH_CHECK } from '../components/App'
import Loader from '../components/Loader'

export default function Pets() {
  const [data, loading, error] = useQuery(AUTH_CHECK, { isLocal: true })
  console.log(`data`, data);
  console.log(`loading`, loading);
  console.log(`error`, error);

  if (loading) return <Loader />

  if (error) return <span>Error</span>

  return (
    <div className="page pets-page">
      <h1>Is Auth</h1>
      <div>User is {data?.user.isAuth ? '': 'not' } Authenticated</div>
    </div>
  )
}
