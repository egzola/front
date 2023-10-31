// components/Sidebar.js

import { useState } from 'react';

import { BsGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { TbReportMoney } from 'react-icons/tb';
import { BiLogIn } from 'react-icons/bi';


export default function SideBar(props) {

  return (
    <>
      <button className="toggleSideBar" onClick={props.toggle}>&#9776;</button>
      <div className="sideBar" style={{width:props.isOpen ? '0px' : '200px',opacity:props.isOpen ? '0.5' : '1'}}>
        <nav>
           <a href="/"><AiOutlineHome className="menuIcon" />HOME</a>
           <a href="/about"><AiOutlineInfoCircle className="menuIcon" />ABOUT</a>
           <a href="/posicao"><TbReportMoney className="menuIcon" />POSICAO</a>
           <a href="/tasks"><TbReportMoney className="menuIcon" />TASKS</a>
           <a href="/login"><BiLogIn className="menuIcon" />LOGIN</a>
        </nav>
      </div>
    </>
  );
};
