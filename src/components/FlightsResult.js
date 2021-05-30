import Cards from "./Cards"
import getData from "../hooks/useData"



function FlightsResult(){

    const {data} = getData();
    console.log(data)
    return(
        <div className="w-100">
            <Cards/>
        </div>
    )
}

export default FlightsResult;