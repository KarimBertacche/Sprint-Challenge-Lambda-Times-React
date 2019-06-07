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

            render() {
                return (
                    <div>
                        {
                            this.state.logged ? 
                            <ComponentOne />
                            : <ComponentTwo />
                        }
                    </div>
                )
            }
        }
    }
}