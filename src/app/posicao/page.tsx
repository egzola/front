"use client"

import Layout from '../../components/Layout';
import Toggle from '../../components/Toggle';

import { useState, useEffect } from 'react';


export default function Posicao() {

  let Tog: any[] = [];
  Tog.push({});
  Tog.push({});


  [Tog[0].value, Tog[0].set] = useState(false);
  [Tog[1].value, Tog[1].set] = useState(false);


/*
  useEffect(()=>{
      setTimeout(() => {
        Tog[1].set(true)
      }, 3000);
  },[]);
*/

/*
  useEffect(()=>{
      Tog[0].set(Tog[1].value);
  },[Tog[1].value]);
*/

  return (
    <Layout headerTitle="CONTROLE FINANCEIRO - POSICAO">
       <center>
       POSICAO<br/>
       Muchacha testando 123....
       <br/>
       <button onClick={()=>Tog[0].set(!Tog[0].value)}>SET</button>
       <br/><br/>
       <div className="togglePanel" style={{height:"180px",width:"360px",borderRadius:"8px",padding:"20px"}}>
          <Toggle id="T1" size="0.40" text="piscina" hook={Tog[0]} />
          <Toggle id="T2" size="0.40" text="luz quarto" hook={Tog[1]} />
       </div>
       </center>
    </Layout>
  );
};
