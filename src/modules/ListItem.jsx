function ListItem ({item, setFlag}) {
    const deleteClick = () => {
            fetch(`https://api.yohiharu.com/delete.cgi?id=${encodeURIComponent(item.id)}`)
            .then(() => {setFlag(prev => prev + 1)})
    }
    return(
        <div className="mt-1 p-1 border-b border-gray-700 bg-amber-200 rounded-xl">
                <p>ID: {item.id}</p>
                <p>{item.text}</p>
                <button className="bg-red-100 m-3 p-2 rounded-xl hover:bg-red-200 cursor-pointer" onClick={deleteClick}>DELETE</button>
        </div>
    )
}
export default ListItem