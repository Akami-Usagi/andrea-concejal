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
`
const ModalImage = styled.img`
    width: 90%;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    border-radius: 20px;
    margin-bottom: 20px;
`
const ModalParraf = styled.p`
    width: 95%;
    font-weight: bold;
    font-size: 20px;
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
    @media (max-width: 430px){
        gap: 0;
        margin-top: -30px;
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
                
                <ModalParraf>Acompañanos este domingo 15 de Octubre a partir de las 2:00PM inscribete como asistente y tambien participa en los diferentes torneos que tendremos para ti. Lugar: Parque Fuenmayor (Frente al Hospital San Jose)</ModalParraf>
                <ModalImage src="/img/Asistencia.png" alt="Imagen Feria 70 de Buga" />
                
                <ButtonsDiv>
                    <ModalButton href="https://docs.google.com/forms/d/e/1FAIpQLSd4ZWU5fABrj94wDYGGSjY95TxddBRMIo6FsO9lKVbXciMHVw/viewform?usp=sf_link" target="blank">Asistencia</ModalButton>
                    <ModalButton href="https://docs.google.com/forms/d/e/1FAIpQLSd4ZWU5fABrj94wDYGGSjY95TxddBRMIo6FsO9lKVbXciMHVw/viewform?usp=sf_link" target="blank">Party Animals</ModalButton>
                    <ModalButton href="https://docs.google.com/forms/d/e/1FAIpQLSd4ZWU5fABrj94wDYGGSjY95TxddBRMIo6FsO9lKVbXciMHVw/viewform?usp=sf_link" target="blank">Just Dance</ModalButton>
                    <ModalButton href="https://docs.google.com/forms/d/e/1FAIpQLSd4ZWU5fABrj94wDYGGSjY95TxddBRMIo6FsO9lKVbXciMHVw/viewform?usp=sf_link" target="blank">Cosplay</ModalButton>
                </ButtonsDiv>
            </ContentDiv>            
        </ModalDiv>
    </div>
    )

}