class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
    };
    this.buttonClick.bind(this);
  }

  componentDidMount() {
    searchYouTube('donkeykong', (data)=>{
      this.setState({
        currentVideo: data.items[0],
        videos: data.items
      });
    });
  }


  handleSearch(input) {

    searchYouTube(input, (data)=>{
      this.setState({
        currentVideo: data.items[0],
        videos: data.items
      });
    });

    // var result = (data)=>{
    //   this.setState({
    //     currentVideo: data.items[0],
    //     videos: data.items
    //   });
    // };
  }

  buttonClick(video) { 
    // console.log('hahaha')
    this.setState({
      currentVideo: video
    });
  }

  render() {
    console.log(this.state.videos);
    // console.log(this.state.currentVideo.snippet.title)
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchHandler = {this.handleSearch.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video= {this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos= {this.state.videos} buttonClick={this.buttonClick.bind(this)}/></div>
          </div>
        </div>
      </div>     
    );
  }

}






// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em><Search/></h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em><VideoList/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
