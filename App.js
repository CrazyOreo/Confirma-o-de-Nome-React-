import React, { useState, useEffect } from 'react';

function Example() {
const [nome, setnome] = useState("lucas");

const renderização = () =>{
if(nome=="Pedro"){
  return(
  <div>
    <p style={{color:'green'}}>{nome}</p>
    
  </div>
  );
}else{
  return(
  <div>
    <p style={{color:'red'}}>{nome}</p>
  </div>
    );
  }
};
return(
  <div>
    {renderização()}
  </div>
  
    ) }
    export default Example;