import React, {Component} from 'react'
import {dark as Logo} from '../components/logo'
import Nav from '../components/nav'
import Video from '../components/videoPreview'

class home extends Component {
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
                        <Video/>
                        <Video/>
                        <Video/>
                        <Video/>
                    </div>
                </div>
            </section>
        )
    }
}

export default home;