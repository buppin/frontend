import { useState } from 'react'
import List from './../modules/List'
import Submit from './../modules/Submit'

function Home() {
  const [flag, setFlag] = useState(0)
  return (
    <>
      <h1 className="text-center mt-2 text-5xl">物品管理システム</h1>
      <Submit setFlag={setFlag}></Submit>
      <List flag={flag} setFlag={setFlag}></List>
    </>
  )
}

export default Home
