export default function search(array, enter, setNewArray) {

    const searchElements = array.filter(elem => elem.content.toUpperCase().indexOf(enter.toUpperCase()) !== -1);

    document.title = `Найдено элементов: ${searchElements.length}`;

    if (searchElements.length !== 0) {
        setNewArray([...searchElements]);
    } else {
        console.log("Empty is array!")
        setNewArray([]);
    }
}
