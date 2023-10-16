import React from "react";
import  styled from "styled-components";
import Modal from "react-modal"


Modal.setAppElement('#root'); 

const ModalDiv = styled(Modal)`
    width: 900px;
    height: fit-content;
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: lightgrey;
    border: none;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 10px 20px 10px;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.4), -10px 10px 10px rgba(0,0,0,0.4);
    &:focus{
        outline: none;
    }
    @media (max-width: 930px){
        width: 90%;
        height: fit-content;
        flex-direction: column;
        top: 70px;
    }
    @media (max-width: 430px){
        top: 0;
    }
`
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
`
const ModalClose = styled.h1`
    width: 40px;
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;
    color: #1A4682;
`

const ModalParraf = styled.p`
    width: 95%;
    font-weight: bold;
    font-size: 20px;
    color: #1A4682;
`

const ModalButton = styled.a`
    margin-top: 30px;
    width: 150px;
    border-radius: 15px;
    border: 2px solid #1A4682;
    color: white;
    background-color: #1A4682;
    padding: 15px;
    font-size: 20px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    transition: 400ms ease-in-out;
    text-decoration: none;
    &:hover{
        background-color: white;
        color: #1A4682;
        font-weight: bold;
        border: 2px solid #1A4682;
    }
    @media (max-width: 430px){
        width: 80%;
    }

`
const ButtonsDiv= styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
    
`
const VPlayer = styled.iframe`
    width: 720px;
    height: 405px;
    border: none;
    border-radius: 30px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    @media (max-width: 850px){
        width: 600px;
        height: 337px;
    }
    @media (max-width: 700px){
        width: 500px;
        height: 281px;
    }
    @media (max-width: 600px){
        width: 400px;
        height: 225px;
    }
    @media (max-width: 450px){
        width: 350px;
        height: 197px;
    }
    @media (max-width: 385px){
        width: 95%;
        
    }
    
`


export default function EventModal({isOpen, onClose}){


    return(
        <div>
        <ModalDiv
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        style={{overlay: {backgroundColor: "rgba(0,0,0,0.75)"}}}
        >
            <ContentDiv>
                <ModalClose onClick={onClose}>X</ModalClose>
                
                <ModalParraf>Muchisimas gracias a todos los asistentes del Festival Otaku, en especial a Gustavo Gallego por haberlo hecho posible, espero contar tambien con el apoyo de todos ustedes en las elecciones del proximo 29 de Octubre!!!</ModalParraf>
                <VPlayer src={`https://www.youtube.com/embed/Fjc7DPZEs-E?autoplay=1&mute=1&loop=1&playlist=Fjc7DPZEs-E`} title="YouTube video player" frameborder="0" allow="fullscreen" ></VPlayer>

                <ButtonsDiv>
                    <ModalButton href="https://www.gustavogallego.com.co/" target="blank">Web Gustavo Gallego</ModalButton>
                </ButtonsDiv>
            </ContentDiv>            
        </ModalDiv>
    </div>
    )

}