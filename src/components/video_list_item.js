import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const video_image_url = video.snippet.thumbnails.default.url;
  const video_title = video.snippet.title;
  return (
      <li className="list-group-item" onClick={() => {onVideoSelect(video)}}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={video_image_url}/>
          </div>
          <div className="media-body">
            <div className="media-heading">{video_title}</div>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem
