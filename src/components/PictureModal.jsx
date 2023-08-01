import React from "react";
import  styled from "styled-components";
import Modal from "react-modal"

Modal.setAppElement('#root'); 

const ModalDiv = styled(Modal)`
    width: 900px;
    height: 500px;
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
`
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    bottom: 100px;
    
`
const ModalClose = styled.h1`
    width: 40px;
    position: absolute;
    top: 90px;
    right: 1px;
    cursor: pointer;
`

const ModalImage = styled.img`
    width: 400px;
    height: 200px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    border-radius: 20px;
    margin-top: -50px;
    @media(max-width: 450px){
        width: 90%;
        height: auto;
    }
`
const ModalParraf = styled.p`
    font-weight: bold;
    font-size: 20px;
    color: #1A4682;
    width: 90%;
`


export default function PictureModal({isOpen, onClose, objetiveData}){

    const ModalTitle = styled.h1`
        font-size: 100px;
        color: ${objetiveData.color};
    `

    

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
                <ModalTitle>{objetiveData.letra}</ModalTitle>
                <ModalImage src={objetiveData.img} alt="Imagen" />
                <ModalParraf>{objetiveData.texto}</ModalParraf>
                
            </ContentDiv>            
        </ModalDiv>
    </div>
    )

}