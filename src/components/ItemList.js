import Item from "./Item"

const Itemlist = ({items}) => {
    // console.log(items)
    return(
        <>
        {items.map((item,index) => (
            <Item key = {index} item = {item}/>
        ) )}
        </>
    )
}

export default Itemlist