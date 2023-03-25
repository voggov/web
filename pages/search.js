export default function search(array, enter, setNewArray) {

    const searchElements = array.filter(elem => elem.content.toUpperCase().indexOf(enter.toUpperCase()) !== -1);
    /*for(let i=0;i<array.length;i++){
        if((JSON.stringify(array[i].content)).toUpperCase().indexOf(enter.toUpperCase())!==-1){
            searchElements.push(array[i]);
        }
    }*/
    document.title = `Найдено элементов: ${searchElements.length}`;

    if (searchElements.length !== 0) {
        setNewArray([...searchElements]);
    } else {
        console.log("sosi")
        setNewArray([]);
    }
}
