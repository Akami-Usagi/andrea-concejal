import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";


const ViewerDiv = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContentDiv = styled.div`
    width: 350px;
    box-shadow: 15px 15px 20px rgba(0,0,0,0.5);
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    
`


const BottomDiv = styled.div`
    width: 350px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const BootomLogo = styled.img`
    height: 70px;
`
const DownloadButton = styled.button`
    width: 200px;
    padding: 15px;
    margin: 20px 0;
    border-radius: 15px;
    border: 2px solid #1A4682;
    color: white;
    background-color: #1A4682;
    padding: 15px;
    font-size: 20px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    transition: 400ms ease-in-out;
    &:hover{
        background-color: white;
        color: #1A4682;
        font-weight: bold;
        border: 2px solid #1A4682;
    }
`

export default function PictureViewer({picCode}){

    const downloadImage = () => {
        saveAs(`https://i.imgur.com/${picCode}.jpg`, "imagenCabalgata.jpg")
    }

    const PictureDiv = styled.div`
        width: 100%;
        height: 500px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: url(${`https://i.imgur.com/${picCode}.jpg`}) no-repeat center;
        background-size: cover;

    `

    return(
        <ViewerDiv>
            <h1>Disfruta de tu Fotografia!</h1>
            <ContentDiv>
                <PictureDiv></PictureDiv>
                <BottomDiv>
                        <BootomLogo src="/img/header_banner.svg" alt="Logo" />
                        <BootomLogo src="/img/andrea_header_logo_dark.svg" alt="Logo" />
                </BottomDiv>
            </ContentDiv>
            <DownloadButton onClick={downloadImage}>Descargar</DownloadButton>
        </ViewerDiv>
    )
}