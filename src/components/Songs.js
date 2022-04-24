import React, {useState, useEffect} from 'react'

const Songs = () => {
    const [lyrics, setLyrics] = useState(0);
    const [albums] = useState([
        {name: "Slipknot", year: 1999, img: "https://upload.wikimedia.org/wikipedia/en/4/44/Slipknot_-_Slipknot2.jpg"},
        {name: "Iowa", year: 2001, img: "https://upload.wikimedia.org/wikipedia/en/1/1d/Slipknot_Iowa.jpg"},
        {name: "Vol. 3 (The Subliminal Verses)", year: 2004, img: "https://upload.wikimedia.org/wikipedia/en/e/e9/Slipknot_-_Vol._3-_%28The_Subliminal_Verses%29.jpg"},
        {name: "All Hope Is Gone", year: 2008, img: "https://upload.wikimedia.org/wikipedia/en/a/a9/All_Hope_is_Gone_%28original%29.jpg"},
        {name: "5. The Gray Chapter", year: 2014, img: "https://upload.wikimedia.org/wikipedia/en/3/36/5_The_Gray_Chapter_Artwork.jpg"},
        {name: "We Are Not Your Kind", year: 2019, img: "https://upload.wikimedia.org/wikipedia/en/1/18/Slipknot_-_We_Are_Not_Your_Kind.png"}
    ]);

   
    const changeColor = (e) => {
        if(e.target.style.backgroundColor === 'white'){
            e.target.style.backgroundColor = '#f1356d'

        } else {
            e.target.style.backgroundColor = 'white'

        }
    }



    useEffect(() => {
        async function getLyrics(){
            const resp = await fetch('https://private-amnesiac-0d5df9-lyricsovh.apiary-proxy.com/v1/Slipknot/Duality')
            const data = await resp.json()
            setLyrics(data.lyrics)
        }
        getLyrics()
    }, [])

    const renderRows = () => {
        return albums.map((each, i) => (
          <ul className="list">
            <li key={i}>
              <p role="article">{each.albumName}</p>
              <p>{each.name}</p>
              <p>{each.year}</p>
              <img src={each.img} alt={each.alt} style={{ maxWidth: "500px" }} />
            </li>
            <button name="color" onClick={ changeColor }>Like</button>
            <div className="liked">

            </div>
            <hr></hr>
          </ul>

        ));
      };
      return <>{renderRows()}

      <div className="lyrics">

      { lyrics }

      </div>
      
      </>;

//   return (
//     <div className="songs">
    
//     </div>
//   )
}

export default Songs

