import "./Search.css"
import {Link} from "react-router-dom"


const Search = () => {
    return (
        <div>
            <h1>Search Page</h1>
            <Link to={"/Payment"}>Payment</Link>
        </div>
    )
}


export default Search