import React from 'react'

const MusicPost = ({ posts, title }) => {



  return (
    <div className="music-posts">
        <h2>{ title }</h2>
        { posts.map((post) => (
        <div className="post-preview">
        <h2> Artist: { post.artist }</h2>
        <h3>Genre: { post.genre }</h3>
        <p>{ post.description }</p>
        <img src={ post.img } alt={posts.alt} />
        </div>    
    )) }
   
    </div>
  )
}

export default MusicPost
