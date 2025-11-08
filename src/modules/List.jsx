import { useEffect, useState } from "react"
import ListItem from "./ListItem";

function List({flag, setFlag}) {
  var [outputJson, setOutputJson] = useState()
  useEffect(() => {
    fetch("https://api.yohiharu.com/list.cgi")
    .then(response => response.json())
    .then(data => {
      setOutputJson(data.output)
    });
    console.log(flag)
  }, [flag])
  var deleteClick = () => {
      fetch(`https://api.yohiharu.com/cgi/delete.cgi?id=${item.id}`)
  }
  return (
    <>
        <div className="rounded-xl flex flex-col w-3/4 p-4 mt-2 mx-auto bg-amber-300">
            <p>list</p>
            {outputJson && outputJson.map((item, index) => (
              <ListItem key={item.id} item={item} setFlag={setFlag}></ListItem>
            ))}
        </div>

    </>
  )
}

export default List