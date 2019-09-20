import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form{
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input{
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder{
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }
`;
