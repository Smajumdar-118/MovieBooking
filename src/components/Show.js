import React, { useEffect, useState } from 'react';
import ShowItem from './ShowItem';



function Show() {
  const [articles, setArticles] = useState([])



  useEffect(() => {

    fetch('https://api.tvmaze.com/search/shows?q=all').then(response => response.json()).then(data => setArticles(data)).catch(err => console.log("Error"));



  }, [])

  return (
    <div>
      <div className="container my-3">
        <h1 className='text-center' style={{ margin: '2rem', marginTop: '5rem' }}><b>Movie Show</b></h1>

        <div className="row">



          {articles && articles.map((element) => {

            return <div className="col-md-4" key={element.show.id}>


              <ShowItem title={element.show.name} description={element.show.language} urlToImage={element.show.image} url={element.show.officialSite} summary={element.show.summary} />
            </div>
          }
          )}

        </div>

      </div>

    </div>
  )
}

export default Show
