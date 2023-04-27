import React from 'react';
import ToListComponent from './ToListComponent';

export default function ListComponent(comp) {
    const elements = comp.elements;
    const style = {background: "", marginLeft: "25%", marginRight: "25%", border: "10px solid black", padding: "20px 50px"};
    const ListElements = elements.map((element) => (<ToListComponent id={element.id} content={element.content}/>));
    return <ul style={style}>{ListElements}</ul>;
}
