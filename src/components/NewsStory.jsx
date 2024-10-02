import React from 'react';
import '../NewsStory.css';

function NewsStory({ story }) {
  return (
    <div className="news-story">
      <img src={story.image} alt={story.title} />
      <h2><a href={story.link}>{story.title}</a></h2>
      <p><strong>By:</strong> {story.creator}</p>
      <p>{story.description}</p>
    </div>
  );
}

export default NewsStory;
