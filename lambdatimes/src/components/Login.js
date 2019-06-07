import React from 'react';
import styled from 'styled-components';

const StylesLoginPage = styled.div`
    main {
        display: ${props => props.displayLogIn || 'flex'};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        border: 3px solid #000;
        border-radius: 5px;
        box-shadow: 1px 1px 10px #000;
        margin: 100px auto 0;

        section {
            margin-bottom: 20px;

            input {
                width: 200px;
                height: 30px;
                font-size: 1rem;
                border: 3px solid #000;
                border-radius: 5px;
                outline: 0;

                &:valid {
                    border: 3px solid #f00;
                }

                &:invalid {
                    border: 3px solid #0f0;
                }
            }
        }

        button {
            padding: 5px 30px;
            border: 3px solid #000;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                background-color: #000;
                color: #fff;
            }
        }
    }
`;

function LoginPage(props) {
    return(
        <StylesLoginPage>
            <main>
                <section>
                    <input
                        type="text"
                        placeholder="Username"/>
                </section>
                <section>
                    <input
                        type="password"
                        placeholder="Password"/>
                </section>
                <button onClick={props.clicked}>Login</button>
            </main>
        </StylesLoginPage>
    );
}

export default LoginPage;