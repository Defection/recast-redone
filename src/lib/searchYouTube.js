var searchYouTube = (query, callback) => {
  // TODO
  var options = {      
    part: 'snippet',
    key: 'AIzaSyAVqvwDBGqOneD6BL3sT5sNNRHEdPUkP-0',
    q: query || 'sean',
    maxResults: 5,
    type: 'video',
    videoEmbeddable: true
  };

  $.get('https://www.googleapis.com/youtube/v3/search', options) 
    .done(callback)
    .fail(error => console.error(error));
};

window.searchYouTube = searchYouTube;
