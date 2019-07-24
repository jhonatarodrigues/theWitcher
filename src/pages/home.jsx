import React, {Component} from 'react'
import {dark as Logo} from '../components/logo'
import Nav from '../components/nav'
import Video from '../components/videoPreview'
import Button from '../components/button'

class home extends Component {

    constructor(props) {
        super(props);

        this.state = {videos: [], prevPage: '', nextPage: '', }
    }

    getPlayListYoutube = () => {
        let playlistId = 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF';
        let key = 'AIzaSyBVZQbSIU6INnKeu9pBrbRj0QzXPa74e0Y';
        let max = '10';
        let url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=' + max + '&playlistId=' + playlistId + '&key=' + key;

        if(this.state.nextPage.length > 0)
            url += '&pageToken=' + this.state.nextPage;

        fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(response => response.json()).then(data => {
            
            if(this.state.nextPage.length > 0){
                const updatedList = this.state.videos.concat(data.items);
                this.setState({videos: updatedList});
            }
            else
                this.setState({videos: data.items});

            this.setState({nextPage: data.nextPageToken});
            this.setState({prevPage: data.prevPageToken});

        });
    }

    loadMore = () => {
        this.getPlayListYoutube();
    }

    componentDidMount() {
        
        this.getPlayListYoutube();

    }

    render() {
        let hidden = [""];
        if(!this.state.nextPage) {
            hidden.push('removeButton');
        }
        return (
            <section className="pageHome">
                <div className="leftColumn">
                    <div className="logo">
                        <Logo />
                    </div>
                    <Nav />
                </div>
                <div className="rightColumn">
                    <div className="contentScroll">
                        <div className="scrollNav">
                            {this.state.videos.map((value, index) => {
                                return <Video 
                                            key={index} 
                                            title={value.snippet.title} 
                                            thumb={value.snippet.thumbnails.high.url}
                                            video={value.snippet.resourceId.videoId}
                                        />
                            })}
                            
                        </div>
                        <div className="contentLoad">
                            <Button class={hidden.join(' ')} click = { this.loadMore.bind(this) } title="Load More" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default home;