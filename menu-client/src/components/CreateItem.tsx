import React, { useState } from "react";

// Network
import axios from "../services/app.services";

// Models
import Item2 from "../types/item2.interface";

const CreateItem: React.FC = () => {
    const [item2, setItem2] = useState<Item2 | null>(null);

    const getUser = async (e: any) => {
        const response = await axios.get<Item2>("/menu/items/1");
        console.log(response.data);
        setItem2(response.data);
    };

    return (
        <form>
            <div className="box">
                <div className="box-options">
                    <label>CREAR PRODUCTO</label>
                    <label htmlFor="exampleInputEmail">
                        {item2 ? item2.name : "nombre por defecto"}
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="First Name"
                    />

                    <div>
                        <button type="button" onClick={getUser}>
                            Crear
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreateItem;
