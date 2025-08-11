import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'




const Celular = (props) => { 
    return (
    <celular>
    <FloatingWhatsApp
    phoneNumber="54-1164850001"
    accountName="CargoExpres"
    statusMessage="Generalmente responde en menos de una hora"
    chatMessage='Hola! En que podemos ayudarte?'
    placeholder='Deje su mensaje...'
    chatboxHeight={300}
    allowEsc
    allowClickAway
    notification
    notificationSound/>
   </celular>
  );
    };
   
 
export default Celular;


