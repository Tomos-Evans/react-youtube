import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = // INSERT API KEY HERE

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selected_video: null,
    }

    this.videoSearch('seths bike hacks')
  }

  render() {
    return (
      <div>
        <SearchBar videoSearch={this.videoSearch}/>
        <VideoDetail video={this.state.selected_video}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    );
  }

  onVideoSelect = (selected_video) => {
    this.setState({selected_video})
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos,
        selected_video: videos[0]
      })
    });
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
