import React, {Component} from 'react'
import {dark as Logo} from '../components/logo'

class login extends Component {
    render() {
        return (
            <section className="pageLogin">
                <div className="content">
                    <div className="logo">
                        <Logo></Logo>
                    </div>
                </div>
            </section>
        )
    }
}

export default login;