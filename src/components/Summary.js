import { Link, useLocation } from "react-router-dom";




function Summary(props) {

    const location = useLocation();
    const propsData = location.state;

    const book = { name: propsData.name };

    return (
        <div>
            <div className="container my-3">
                <h2>{propsData.name}</h2>
                <h3>Summary Of the Show</h3>
                {propsData.details}
                <div className="container my-3">

                    <Link className="btn btn-primary" to='/Book' state={book}>Book Now</Link>
                </div>


            </div>
        </div>
    )
}

export default Summary
