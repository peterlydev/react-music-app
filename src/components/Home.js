import React, { useState } from 'react'
import MusicPost from './MusicPost';


const Home = () => {
    const[posts] = useState([
        { artist: 'Slipknot', genre: 'Metal', description: "American heavy metal band formed in Des Moines, Iowa, in 1995 by percussionist Shawn Crahan, drummer Joey Jordison and bassist Paul Gray. After several lineup changes in its early years, the band settled on nine members for more than a decade: Crahan, Jordison, Gray, Craig Jones, Mick Thomson, Corey Taylor, Sid Wilson, Chris Fehn, and Jim Root. Gray died on May 24, 2010, and was replaced during 2011–2014 by guitarist Donnie Steele. Jordison was dismissed from the band on December 12, 2013. Steele left during the recording sessions for .5: The Gray Chapter. The band found replacements in Alessandro Venturella on bass and Jay Weinberg on drums. After the departure of Jordison, as of December 2013 the only founding member in the current lineup is percussionist Crahan. Fehn was also dismissed from the band in March 2019 prior to the writing of We Are Not Your Kind. Slipknot is well known for its attention-grabbing image, aggressive style of music, and energetic and chaotic live shows.The band rapidly rose to fame following the release of their eponymous debut album in 1999. The 2001 follow-up album, Iowa, although darker in tone, made the band more popular. After a brief hiatus, Slipknot returned in 2004 with Vol. 3: (The Subliminal Verses), before going on another hiatus and returning in 2008 with its fourth album, All Hope Is Gone, which debuted at number one on the Billboard 200 chart. After another long hiatus, Slipknot released its fifth studio album, .5: The Gray Chapter, in 2014. Their sixth studio album, We Are Not Your Kind, was released on August 9, 2019.The band has released two live albums titled 9.0: Live and Day of the Gusano: Live in Mexico, a compilation album titled Antennas to Hell, and five live DVDs. The band has sold 30 million records worldwide.", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/VivaXElRock19-9.jpg/1920px-VivaXElRock19-9.jpg'}
    ])

    let colors = ["#d93f4f", "#10d1e7", "#ddcbcb"];
    let active = 0;
    setInterval( function () {
        document.querySelector('body').style.background = colors[active];
        active++;
        if(active === colors.length) active = 0;
    }, 5000);

  return (
    <div className="homepage">
    <p id="caption">A place where you can share your favourite songs to the world!</p>
    <MusicPost posts={posts} title="Peter's Music!" />
    </div>
  )
}

export default Home;
