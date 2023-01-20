import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Menu: React.FC = () => {
    //navigation
    const navigate = useNavigate();
    const handleCreateClick = () => {
        navigate("/create");
    };
    const handleReadClick = () => {
        navigate("/read");
    };
    const handleUpdateClick = () => {
        navigate("/update");
    };
    const handleDeleteClick = () => {
        navigate("/delete");
    };

    return (
        <div className="box">
            <div className="box-options">
                <Header/>
                <button type="button" onClick={handleCreateClick}>
                    Crear
                </button>
                <button type="button" onClick={handleReadClick}>
                    Obtener
                </button>
                <button type="button" onClick={handleUpdateClick}>
                    Actualizar
                </button>
                <button type="button" onClick={handleDeleteClick}>
                    Borrar
                </button>
            </div>
        </div>
    );
};

export default Menu;
