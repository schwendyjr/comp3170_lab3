import React, { useEffect, useState } from 'react';
import NewsStory from './components/NewsStory';
import './index.css';

function App() {
  const [newsStories, setNewsStories] = useState([]);

  useEffect(() => {
    fetch('/sample_news_stories.json')
      .then(response => response.json())
      .then(data => setNewsStories(data));
  }, []);

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div className="news-feed">
        {newsStories.map(story => (
          <NewsStory key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

export default App;
