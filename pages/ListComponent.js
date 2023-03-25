import React from 'react';
import ToListComponent from './ToListComponent';

export default function ListComponent(comp) {
    const elements = comp.elements;
    const ListElements = elements.map((element) => (<ToListComponent id={element.id} content={element.content}/>));
    return <ul>{ListElements}</ul>;
}
