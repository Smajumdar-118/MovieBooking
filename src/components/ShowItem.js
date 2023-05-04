import React from 'react'
import { Link } from 'react-router-dom'


function ShowItem(props) {
  let { title, description, url, urlToImage,summary } = props
  const summ = {
    name: title,
    details: summary
  };
  return (
    <div>
      <div className="card" style={{ margin: '1rem 0rem' }}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1' }}>

          <span className="visually-hidden"></span>
        </span>

        <img src={urlToImage} className="card-img-top" alt='...' />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Language : {description}</p>

          <Link className="btn btn-primary mx-2 my-2" to={url} >Official Site</Link>
          <Link className="btn btn-primary mx-2 my-2" to='/Summary' state={summ}>Summary</Link>
          <Link className="btn btn-primary mx-2 my-2" to='/Summary' state={summ}>Book Now</Link>

        </div>
      </div>
    </div>




  )
}

export default ShowItem
