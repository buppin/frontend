import List from './../modules/List'
import Submit from './../modules/Submit'

function Home() {
  return (
    <>
      <h1 className="text-center mt-2 text-5xl">物品管理システム</h1>
      <Submit></Submit>
      <List></List>
    </>
  )
}

export default Home
