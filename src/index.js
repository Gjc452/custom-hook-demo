import React from 'react'
import ReactDOM from 'react-dom'
import useList from "./hooks/useList"

const rootElement = document.querySelector('#root')

const App = () => {
  const {list, deleteIndex} = useList()
  return (
    <div>
      <h1>List</h1>
      {list
        ? (<ol>
          {list.map((item, index) => (
            <li key={item.id}>{item.name}
              <button onClick={() => {
                deleteIndex(index)
              }}>x
              </button>
            </li>
          ))}</ol>)
        : ("加载中...")
      }
    </div>
  )
}

ReactDOM.render(<App/>, rootElement)





