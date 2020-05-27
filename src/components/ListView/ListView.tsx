import React from "react";
import "./ListView.scss";
import { TodoList } from "../TodoList/TodoList";

export const ListView:React.FC = () => {
    return(
        <div className="list-view">
            <TodoList />
        </div>
    );
}