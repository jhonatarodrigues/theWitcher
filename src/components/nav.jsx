import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button'

class nav extends Component {

    constructor(props) {
        super(props);

        this.state = {openMenu: false}
    }

    clickMobile = () =>{
        if(this.state.openMenu)
            this.setState({openMenu: false});
        else
            this.setState({openMenu: true});
        
        
    }

    render(){
        let nav = [""];
        if(this.state.openMenu) {
            nav.push('mobileActiveNav');
        }

        return (
            <div className="contentNavegacao">
                <div className={"sanduichMobile" + nav.join(' ')} onClick={this.clickMobile}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className={"navigation" + nav.join(' ')} >
                    <li className='activeNav'>
                        <Link to='/home'>
                            <Button title='Trailers' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            <Button title='Logout' />
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default nav; 