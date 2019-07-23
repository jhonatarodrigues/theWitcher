import React, {Component} from 'react'
import {dark as Logo} from '../components/logo'
import Input from '../components/input'
import Button from '../components/button'

class login extends Component {
    render() {
        return (
            <section className="pageLogin">
                <div className="content">
                    <div className="logo">
                        <Logo></Logo>
                    </div>
                    <form>
                        
                        <Input 
                            type="email" 
                            name="email" 
                            legenda = "Email"
                        />
                        <Input 
                            type="password" 
                            name="password" 
                            legenda = "Password"
                        />
                        <div className="contentButton">
                            <Button type='submit' title='Login'  />
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default login;