import { useState } from "react"

const Filter = ({onFilter}) => {

    const [filterTitle, setFilterTitle] = useState("");
    const [filterRate, setFilterRate] = useState("");

    const handleFilter = () => {
        onFilter ({title: filterTitle, rate: filterRate})
    }

    return (
        <>
        <input type = "text" value = {filterTitle} placeholder = "Entrer un titre" onChange = {(e) => setFilterTitle(e.target.value)}/>
        <br/>
        <input type = "number" value = {filterRate} placeholder="Entrer un taux" onChange = {(e) => setFilterRate(e.target.value)}/>
        <br/>
        <button onClick = {handleFilter}>Click Me</button>
        </>
    );
}
export default Filter;

