import styled from '@emotion/styled';
import {Link as LinkComponents} from 'react-router-dom'
import { matBlack } from '../../Constants/Color';

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0, 0, 0, 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
});

export const Link = styled(LinkComponents)`
    text-decoration:none;
    color:white;
    display:flex;
    height:6rem;
    alignItems:center;
    justifyContent:center;
    &:hover {
        background-color:#f0f0f0;
        color:black;
    }
`;

export const InputBox = styled("input")`
width:100%;
height:100%;
border:none;
outline:none;
padding:0 3rem;
border-radius:1.5rem;
background-color:rgba(217,212,212 , 0.6);
`;

export const SearchField = styled("input")`
padding:1rem 2rem;
width:20vmax;
border:none;
outline:none;
border-radius:1.5rem;
background-color:#f1f1f1;
font-size:1.1rem;
`;

export const CurveButton = styled("button")`
border-radius:1.5rem;
padding:1rem 2rem;
boeder:none;
outline:none;
cursor:pointer;
background-color:${matBlack};
color:white;
font-size:1.1rem;
$:hover{
background-color:rgba(0,0,0,0.8);

}
`;
