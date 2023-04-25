import styled from "styled-components";

export const Container = styled.div`
    border : 1px solid #555;
    border-radius : 15px;
    padding : 10px;
    margin : 10px;
    display : flex;
    align-items : center;

    .image{
        margin-right:5px;
    }

    input{
        border: 0px;
        background: transparent;
        outline :0;
        color: yellow;
        font-size: 16px;
        flex : 1;
    }
`;