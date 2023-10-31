"use client"

import Layout from '../../components/Layout';
import Toggle from '../../components/ToggleV2';

import { useState, useEffect } from 'react';


export default function Tasks() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  function updateFieldChanged(index:number, e:any) {
    console.log('index: ' + index);
    let newArr = [...data];
    newArr[index].completed = e.target.checked;
    setData(newArr);
  }


  useEffect(() => {
       fetch('https://dummyjson.com/todos?limit=9')
         .then((res) => res.json())
         .then((ret) => {
           console.log(ret.todos);
           setData(ret.todos);
           setLoading(false);
         })
     }, [])

  if (isLoading) return (<Layout headerTitle="Tasks"><center><p>Loading...</p></center></Layout>)
  if (!data) return (<Layout headerTitle="Tasks"><center><p>No data...</p></center></Layout>)




  return (
    <Layout headerTitle="Tasks">
       <center>
       Tasks<br/>
       <br/>
       <div className="togglePanel" style={{flexDirection:"column",textAlign:"left",height:"auto",width:"460px",borderRadius:"8px",padding:"20px"}}>
          {data.map((item,index) => (
               <Toggle key={index} index={index} size="0.30" text={item.todo} value={item.completed} onChange={updateFieldChanged} />
          ))}
       </div>
       </center>
    </Layout>
  );
};
