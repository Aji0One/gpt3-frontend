import './blog.css';
import React from 'react';
import { Article } from '../../components';
import { blog1,blog2,blog3,blog4,blog5 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
     <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>A lot is happening, 
        We are blogging about it.</h1>
     </div>
     <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article imgurl={blog1} date='Sep 26, 2022' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className='gpt3__blog-container_groupB'>
        <Article imgurl={blog2} date='Sep 26, 2022' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgurl={blog3} date='Sep 26, 2022' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgurl={blog4} date='Sep 26, 2022' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgurl={blog5} date='Sep 26, 2022' title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
     </div>
    </div>
  )
}

export default Blog