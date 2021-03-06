import React ,{Component} from 'react';


class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = { term: ''}
  }
  render() {
    return(
      <div className ="Search-bar">
        <input
          value = {this.state.term}
          onChange = {(event) => this.onInputChange(event.target.value)}
       />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
    //in event.target , there is 'accept','accessKey','align' and 'alt'
}



export default SearchBar;
