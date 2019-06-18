import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <div className="feed">
        <article className="card">
          <div className="card-title">
            <a
              href="https://twitter.com/markdalgleish/status/1095424850565378048"
              target="_blank"
              rel="noopener noreferrer"
            >
              Some Guy in Twitter
            </a>
          </div>
          <div className="card-content">
            If you're not mocking out Lodash, can you really call it a unit
            test?
          </div>
          <div className="card-actions">
            <button type="button" className="button button-liked">
              Like
            </button>
          </div>
        </article>
        <article className="card">
          <div className="card-title">
            <a
              href="https://twitter.com/Malcolm_Kee/status/1089108413999505408"
              target="_blank"
              rel="noopener noreferrer"
            >
              Malcolm Kee
            </a>
          </div>
          <div className="card-content">
            Ah... I hate listening to myself in recording.
          </div>
          <div className="card-actions">
            <button type="button" className="button">
              Like
            </button>
          </div>
        </article>
        <article className="card">
          <div className="card-title">
            <a
              href="https://twitter.com/iamdevloper/status/1081923027644882944"
              target="_blank"
              rel="noopener noreferrer"
            >
              I Am Devloper
            </a>
          </div>
          <div className="card-content">
            <p>
              when you visit a site you handed over 6 months ago and the client
              made some changes themselves
            </p>
          </div>
          <div className="card-image-container">
            <img
              className="card-image"
              src="https://bugbook.netlify.com/images/picture-after-client.jpg"
              alt="Ugly images"
            />
          </div>
          <div className="card-actions">
            <button type="button" className="button">
              Like
            </button>
          </div>
        </article>
        <article className="card">
          <div className="card-title">
            <a
              href="https://twitter.com/iamdevloper/status/1095613605955940353"
              target="_blank"
              rel="noopener noreferrer"
            >
              I Am Devloper
            </a>
          </div>
          <div className="card-content">
            Lodash was created accidentally when someone mocked out Underscore
            for some unit tests.
          </div>
          <div className="card-actions">
            <button type="button" className="button">
              Like
            </button>
          </div>
        </article>
        <article className="card">
          <div className="card-title">
            <a
              href="https://twitter.com/iamdevloper/status/1096040197215551488"
              target="_blank"
              rel="noopener noreferrer"
            >
              I Am Devloper
            </a>
          </div>
          <div className="card-content">
            <p>
              *spends 1 solid hour fixing a spurious css layout bug that only
              appears one manager's laptop*
            </p>
            <p>&gt; oh sorry, I had my browser zoomed in to 110%</p>
          </div>
          <div className="card-actions">
            <button type="button" className="button">
              Like
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
