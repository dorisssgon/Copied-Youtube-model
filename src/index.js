import _ from 'lodash';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/Search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
//Create a new component. this component should produce
const API_KEY = 'AIzaSyAflqGNhnfvSwmSEh0aULZv2k-MTjZE_i8';



class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [],
                  selectedVideo : null
      };

    this.videoSearch('surfboards');
  }

    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (data) => {
          this.setState({videos: data,
                         selectedVideo: data[0]
          });
      });
    }

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);

    return(
    <div>
      <SearchBar onSearchTermChange = {videoSearch}/>
      <VideoDetail video = {this.state.selectedVideo}  />
      <VideoList
        onVideoSelect  = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos}/>
    </div>
  );
}
}

ReactDOM.render(<App />, document.querySelector('.container') );
