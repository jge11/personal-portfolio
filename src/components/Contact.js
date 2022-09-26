import { useState } from "react";

export const Contact = () =>  {
    const formInitalDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        
    }

    const [ formDetails, setFormDetails] = useState(formInitalDetails);
    const [buttonText, setButtonText] = useState ("Send");
    const [status, setStatus] = useState({});


    return (
        <section className="contact" id="connect">
            
        </section>
    )
}