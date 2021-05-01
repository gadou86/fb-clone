import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'


function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
        profilePic="https://avatars.githubusercontent.com/gadou86"
        message="Wow this works"
        timestamp="this is a timestamp"
        username="gadou86"
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
      />
      <Post 
        profilePic="https://avatars.githubusercontent.com/lewagon"
        message="Wow this works"
        timestamp="this is a timestamp"
        username="gadou86"
      />
    </div>
  )
}

export default Feed
