import { useState } from "react"

const Add = ({onAdd}) => {
    const [addId, setAddId] = useState("id");
    const [addPosterUrl, setAddPosterUrl] = useState("posterUrl");
    const [addTitle, setAddTitle] = useState("title");
    const [addDescription, setAddDescription] = useState("description");
    const [addRate, setAddRate] = useState("rate");

    const handleAdd = () => {
        onAdd ({
            id: addId, posterUrl: addPosterUrl, title: addTitle, description: addDescription, rate: addRate
        })
    }
    return (
        <>
        <input type = "number" value = {addId} placeholder = "Entrer un id valable" onChange = {(e) => setAddId (e.target.value)}/> <br/>
        <input type = "text" value = {addPosterUrl} placeholder = "Entrer un posterUrl" onChange = {(e) => setAddPosterUrl (e.target.value)}/> <br/>
        <input type = "text" value = {addTitle} placeholder = "Entrer un titre" onChange = {(e) => setAddTitle (e.target.value)}/> <br/>
        <input type = "text" value = {addDescription} placeholder = "Entrer une description" onChange = {(e) => setAddDescription (e.target.value)}/> <br/>
        <input type = "number" value = {addRate} placeholder = "Entrer un taux" onChange = {(e) => setAddRate (e.target.value)}/> <br/>

        <button onClick = {handleAdd}>Click Here</button>
        </>
    );
}

export default Add;