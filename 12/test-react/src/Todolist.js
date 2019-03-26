import React from "react";

const Todolist =(props)=>{
    return (
        <ul>
            {
                props.list.map((itme,index)=>{
                    return (
                        <li key={index}>{itme.title}</li>
                    )
                })
            }
        </ul>
    );
};
export default Todolist;