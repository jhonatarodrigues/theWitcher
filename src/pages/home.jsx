import React, {Component} from 'react'
import {dark as Logo} from '../components/logo'
import Nav from '../components/nav'
import Video from '../components/videoPreview'

class home extends Component {

    constructor(props) {
        super(props);

        this.state = {videos: []}
    }

    componentDidMount() {
        let playlistId = 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF';
        let key = 'AIzaSyBVZQbSIU6INnKeu9pBrbRj0QzXPa74e0Y';
        let max = '10';

        fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=' + max + '&playlistId=' + playlistId + '&key=' + key, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(response => response.json()).then(data => {
            this.setState({videos: data.items});
            console.log(this.state.videos);
        });


    }

    render() {
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
                        {this.state.videos.map((value, index) => {
                            return <Video 
                                        key={index} 
                                        title={value.snippet.title} 
                                        thumb={value.snippet.thumbnails.high.url}
                                    />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default home;