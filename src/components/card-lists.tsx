import { useState } from "react"
import { CardList } from "./card-list";
export function CardLists(){
    const [listsInfo , setListsInfo] = useState<{listName : string}[]>([]);
    const addList = () => {
        setListsInfo([...listsInfo,{ listName : `List-${listsInfo.length +1}`}]);
    }
    return <>
      <button onClick={addList}>Create {listsInfo.length === 0 ? 'a' : 'another'} list</button>
      <div className="list-container">
        {listsInfo.map((list)=>(<CardList name={list.listName}></CardList>))}
      </div>
    </>
}