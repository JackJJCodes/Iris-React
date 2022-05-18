import React, {useState} from "react";

function Form() {
    const[sepalLength, setSepalLength] = useState("");
    const[sepalWidth, setSepalWidth] = useState("");
    const[petalLength, setPetalLength] = useState("");
    const[petalWidth, setPetalWidth] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(sepalLength + " " + sepalWidth + " " + petalLength + " "  + petalWidth);
    }

    return (
        <div className="form-submit">
            <form onSubmit={handleSubmit}>
                <label>Sepal Length
                    <input
                        type="number"
                        value={sepalLength}
                        onChange={(e) => setSepalLength(e.target.value)} 
                        />
                </label>
                <br />
                <label>Sepal Width
                    <input
                        type="text"
                        value={sepalWidth}
                        onChange={(e) => setSepalWidth(e.target.value)} 
                        />
                </label>
                <br />
                <label>Petal Length
                    <input
                        type="text"
                        value={petalLength}
                        onChange={(e) => setPetalLength(e.target.value)} 
                        />
                </label>
                <br />
                <label>Petal Width
                    <input
                        type="text"
                        value={petalWidth}
                        onChange={(e) => setPetalWidth(e.target.value)} 
                        />
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form;