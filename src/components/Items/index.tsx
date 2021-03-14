import React from 'react'
import ItemsContainer from "./ItemsContainer";

interface Props {
    todos: any[]
}
const Items:React.FC<Props> = ({todos}) => {
    return (
        <ItemsContainer todos={todos}/>
    )
}

export default Items;