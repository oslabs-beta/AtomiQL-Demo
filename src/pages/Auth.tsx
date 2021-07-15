import { useQuery } from 'atomiql'
import { useContext } from 'react'
import { AUTH_CHECK } from '../components/App'
import { AtomiContext } from 'atomiql'
import Loader from '../components/Loader'

export default function Pets() {
  const [data, loading, error] = useQuery(AUTH_CHECK, { isLocal: true })
  const { writeQuery } = useContext(AtomiContext)
  console.log(`data`, data);
  console.log(`loading`, loading);
  console.log(`error`, error);

  const isAuth = data?.user.isAuth;

  if (loading) return <Loader />

  if (error) return <span>Error</span>

  return (
    <div className="page pets-page">
      <h1>Is Auth</h1>
      <div>User is {isAuth ? '' : 'not'} Authenticated</div>
      <button onClick={() => {
        writeQuery(AUTH_CHECK, {
          user: {
            isAuth: !isAuth,
          }
        })
      }}>Log {isAuth ? 'out' : 'in'}</button>
    </div>
  )
}
