// import logo from './logo.svg';

import './App.css';
import {useReducer, useState, useCallback} from 'react'
import NotFound from './components/NotFound'
import Repo from './components/Repo'
import Loading from './components/Loading'
import Search from './components/Search'
import EmptyRepo from './components/EmptyRepo';

const initialState = {
  loading: false,
  data: null,
}

function appReducer(state, action) {
  switch(action.type){
    case 'loading':
      return {...state, loading: true, data: null}
    case 'data':
      return {...state, data: action.value, loading: false}
    case 'error':
      return {...state, loading: false, data: null}
    default:
      return state
  }
}

function search(username){
  return fetch(`https://api.github.com/users/${username}/repos`)
}

function App() {
  const [username, setUsername] = useState('')
  const [state, dispatch] = useReducer(appReducer, initialState)

  const memoizedSearch =  useCallback(() => {
    dispatch({type: 'loading'})
    const data = search(username)
    data.then((res) => res.json()).then((res) => {
      if(res){
        if(res.length >= 0){ 
          dispatch({type: 'data', value: res})
          return
        }
       
        dispatch({type: 'data', value: null})
      }
    }).catch((err) => {
      alert('Error Occured Please Try Again Later')
      dispatch({type: 'error'})
    })
  }, [username])

  return (
    <div className="App">
      <div className="searchBox">
        <p>Search Someone Github Repository</p>
        <Search username={username} setUsername={setUsername} memoizedSearch={memoizedSearch} />
      </div>
      <div className={state.data ? ( state.data.length > 0 ? 'repositoryBox': 'repositoryBox repositoryBoxEmpty') :  'repositoryBox repositoryBoxEmpty'}>
        {state.loading ? <Loading /> : (<>
          {
            state.data ? (state.data.length > 0 ? state.data.map((el, index) => (<Repo el={el} key={index} />)) : <EmptyRepo/>) : <NotFound/>}</>)
          }
      </div>
    </div>
  );
}

export default App;
