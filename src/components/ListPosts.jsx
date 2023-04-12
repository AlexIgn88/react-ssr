import { useState } from 'react';

import OnePost from './OnePost.jsx';
import FetchPost from './FetchPost.jsx';



export default function ListPosts({ posts: propsPosts }) {
  const [statePostsIds, setPosts] = useState([]);
  const newNmbers = [...Array(10).keys()].map(x=>x+1 + propsPosts.length + statePostsIds.length);
  return (<div className="post-list">
    { propsPosts.map((post,k) => <OnePost post={post} key={k}/>)}
    { statePostsIds.map(id => <FetchPost id={id} key={id}/>)}
    <button onClick={() => setPosts(old => [...old, ...newNmbers])} >Next 10 posts</button>
  </div>);
}