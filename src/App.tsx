/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './App.css';
import { gql } from 'graphql-request'
import {useQuery} from 'typescript-package'

const query = gql`
  query {
    pokemons(first: 3) {
      id
      name
    }
  }
`

const App: React.FC = () => {
  const [data, loading, hasError] = useQuery(query);

  console.log(`loading`, loading);
  console.log(`hasError`, hasError);
  console.log(`data`, data);
  
  if (loading) return <div>Loading</div>
  if (hasError) return <div>Error</div>

  return (
    <div>
      {
        data.pokemons.map((char: any) => (
          <div key={char.id}>{char.name}</div>
        ))
      }
    </div>
  );
}

export default App;
