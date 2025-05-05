import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = styled.button`
    border: ${(props) =>
        props.theme === 'primary'
            ? 'none'
            : '1px solid #fff'};
    background: ${(props) =>
        props.theme === 'primary'
            ? 'linear-gradient(180deg, #fe7e5d, #ff6378)'
            : 'transparent'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        ${(props) =>
        props.theme === 'primary'
        ? 'opacity: 0.8'
        : 'background: #012643'};
    }

    &:active {
        opacity: 0.5;
    }
`