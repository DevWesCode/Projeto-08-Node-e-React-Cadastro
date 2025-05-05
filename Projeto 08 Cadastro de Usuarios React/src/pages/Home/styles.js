import styled from "styled-components"; 

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
    gap: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
    width: 100%;
`

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        flex: 1;
        min-width: 48%;
        display: flex;
        flex-direction: column;
    }
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500;

    span {
        color: #ef4f45;
        font-weight: bold;
    }
`

export const Select = styled.select`
    border-radius: 10px;
    border: none;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
    font-size: 14px;
    color: #333;

    &.placeholder {
    color: rgb(126, 126, 126);
  }
  
`

export const Option = styled.option`
    font-size: 14px;

`

