import { useEffect, useState } from "react"

function List() {
  var [outputJson, setOutputJson] = useState()
  useEffect(() => {
    fetch("https://api.yohiharu.com/list.cgi")
    .then(response => response.json())
    .then(data => {
      setOutputJson(data.output)
    });
  }, [])
  return (
    <>
        <div className="rounded-xl flex flex-col w-3/4 p-4 mt-2 mx-auto bg-amber-300">
            <p>list</p>
            {outputJson && outputJson.map((item, index) => (
              <div key={index} className="mt-1 p-1 border-b border-gray-700 bg-amber-200 rounded-xl">
                <p>ID: {item.id}</p>
                <p>{item.text}</p>
              </div>
            ))}
        </div>

    </>
  )
}

export default List