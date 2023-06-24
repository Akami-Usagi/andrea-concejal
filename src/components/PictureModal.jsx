import React from "react";
import  styled from "styled-components";
import Modal from "react-modal"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    
`
const ModalClose = styled.h1`
    width: 40px;
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;
`
const ModalImage = styled.img`
    width: 300px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    border-radius: 20px;
`
const ModalParraf = styled.p`
    font-weight: bold;
    font-size: 20px;
`
const ModalImput = styled.input`
    height: 50px;
    width: 300px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 15px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.4);
    &:focus{
        border-color: #1A4682;
    }
`
const ModalButton = styled.button`
    margin-top: 30px;
    width: 200px;
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

export default function PictureModal({ isOpen, onClose, setPicCode}){

    const [code, setCode] = useState("")
    const navigate = useNavigate()

    

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
                <h1>Descarga tu foto en la Feria 70 de Guadalajara de Buga</h1>
                <ModalImage src="/img/feria_image.webp" alt="Imagen Feria 70 de Buga" />
                <ModalParraf>ingresa el codigo para descargar tu imagen</ModalParraf>
                <ModalImput type="text" onChange={(event) => {
                    setCode(event.target.value)
                }}/>
                <ModalButton onClick={()=> {
                    if(code === ""){
                        alert("Ingresa un codigo valido")
                    }else{
                        setPicCode(code)
                        navigate("/picview")
                    }
                }}>Ver Imagen</ModalButton>
            </ContentDiv>            
        </ModalDiv>
    </div>
    )

}