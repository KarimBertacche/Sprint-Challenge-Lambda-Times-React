import React from 'react';

export default function withAuthentication(ComponentOne) {
    return function(ComponentTwo) {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    username: '',
                    password: '',
                    logged: false
                }
            }

            componentDidMount() {
                localStorage.getItem('loggedUser') && this.setState({
                    logged: JSON.parse(localStorage.getItem('loggedUser'))
                })

            }

            logInUserhandler = () => {
                console.log('I was clicked!!')
                this.setState({
                    logged: true
                })
                localStorage.setItem('loggedUser', JSON.stringify(this.state.logged));
            }

            componentDidUpdate(prevProps, prevState) {
                localStorage.setItem('loggedUser', JSON.stringify(prevState.logged))
            }

            render() {
                return (
                    <div>
                        {
                            this.state.logged ? 
                            <ComponentOne />
                            : <ComponentTwo 
                                clicked={this.logInUserhandler}
                                {...this.props}/>
                        }
                    </div>
                )
            }
        }
    }
}