import React from "react";
import "./ListItem.scss";

interface ListItemProps {
    value: string;
    index: number;
    onClickCallback: (index: number) => void;
    onChangeCallback: (index: number, value: string) => void;
}

export const ListItem:React.FC<ListItemProps> = (props) => {
    const {value, index, onClickCallback, onChangeCallback} = props;
    return(
        <div className="list-item">
            <input type="text" value={value} onChange={(e) => onChangeCallback(index, e.target.value)}/>
            <div onClick={() => onClickCallback(index)}>X</div>
        </div>
    )
}