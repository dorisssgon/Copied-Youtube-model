import React ,{Component} from 'react';


class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = { term: ''}
  }
  render() {
    return(
      <div>
      <input
      value = {this.state.term}
       onChange = {(event) =>
        this.setState({term: event.target.value})
      } />
    
      </div>
    );
  }


    //in event.target , there is 'accept','accessKey','align' and 'alt'
}



export default SearchBar;
