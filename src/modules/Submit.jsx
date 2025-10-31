import { useRef } from "react"

function Submit() {
    var idRef = useRef()
    var textRef = useRef()
    var buttonClick = () => {
        var idValue = idRef.current.value
        var textValue = textRef.current.value
        if (idValue == "" ||  textValue == ""){
            return 
        }
        fetch("https://api.yohiharu.com/insert.cgi", {
        method: "POST",
        body: new URLSearchParams({
            id: idValue,
            text: textValue
        })
        }).then(() => {
            idRef.current.value = ""
            textRef.current.value = ""
        })
    }
    return (
    <>
        <div className="rounded-xl flex flex-col w-1/3 p-4 mt-2 mx-auto bg-amber-100">
            <p>棚番号</p>
            <input ref={idRef} className="bg-green-200 border border-black" type='text'></input>
            <p>内容</p>
            <textarea ref={textRef} className="bg-green-200 border border-black" type='text'></textarea>
            <button onClick={buttonClick} className="m-1 bg-pink-200 mx-auto px-5 py-2 rounded-2xl cursor-pointer hover:bg-pink-300">投稿</button>
        </div>
    </>
  )
}

export default Submit