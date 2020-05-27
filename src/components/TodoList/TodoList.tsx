import React, { useState } from "react";
import "./TodoList.scss";
import { ListItem } from "../ListItem/ListItem";

export const TodoList:React.FC = () => {
    const [listItems, setListItems] = useState<string[]>([]);

    const handleOnClickCallback = (index: number) => {
        const array = [...listItems];
        array.splice(index, 1);
        setListItems(array);
    }

    const handleOnChangeCallback = (index: number, value: string) => {
        const array = [...listItems];
        array[index] = value;
        setListItems(array);
    }

    return(
        <div className="todo-list">
            <div className="list-items">
                {listItems.map((item, index) => {
                    return(
                        <ListItem
                            key={index} 
                            value={item}
                            index={index}
                            onClickCallback={handleOnClickCallback}
                            onChangeCallback={handleOnChangeCallback}
                        />
                    );
                })}
            </div>
            <div onClick={() => setListItems([...listItems, ""])}>+</div>
        </div>
    );
}