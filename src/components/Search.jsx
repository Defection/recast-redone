// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  inputChange(e) {
    console.log(e.target.value);
    this.props.searchHandler(e.target.value);
    this.setState({
      value: e.target.value
    });
  }


  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" 
          className = 'form-control'
          type="text" 
          value={this.state.value} 
          onChange={this.inputChange.bind(this)}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
