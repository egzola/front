// components/Sidebar.js

import { useState } from 'react';

import { BsGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { TbReportMoney } from 'react-icons/tb';
import { BiLogIn } from 'react-icons/bi';

import Link from 'next/link';

export default function SideBar(props) {

  return (
    <>
      <button className="toggleSideBar" onClick={props.toggle}>&#9776;</button>
      <div className="sideBar" style={{width:props.isOpen ? '0px' : '200px',opacity:props.isOpen ? '0.5' : '1'}}>
        <nav>
           <Link href="/"><AiOutlineHome className="menuIcon" />HOME</Link>
           <Link href="/about"><AiOutlineInfoCircle className="menuIcon" />ABOUT</Link>
           <Link href="/posicao"><TbReportMoney className="menuIcon" />POSICAO</Link>
           <a href="/posicao"><TbReportMoney className="menuIcon" />POSICAO X</a>
           <Link href="/tasks"><TbReportMoney className="menuIcon" />TASKS</Link>
           <Link href="/login"><BiLogIn className="menuIcon" />LOGIN</Link>
        </nav>
      </div>
    </>
  );
};
