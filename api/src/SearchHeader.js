import { useState } from "react";


function SearchHeader({search}) {


    const [value, setvalue] = useState("")
    const handleFormSubmit= (event) =>{
        search(value);

        event.preventDefault();



    }
    const handleChange= (event) =>{
      setvalue(event.target.value)

    }
    return ( 
    <div className="searchdiv">
        <form onSubmit={handleFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input value={value} onChange={handleChange}/>
            
        </form>
    </div> );
}

export default SearchHeader;