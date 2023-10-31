// components/Layout.js
import '../styles/layout.css';

import Sidebar from './Sidebar';


import { useState, useEffect } from 'react';

export default function Layout(props:any) {

  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
        <div className="page">
            <header>
               {props.headerTitle}
            </header>

            <main>
                <Sidebar isOpen={isOpenSideBar} toggle={toggleSideBar} />

                <div className="content">
                   {props.children}
                </div>
            </main>

            <footer>
                Desenvolvido por Eduardo Zola - 2023xxx
            </footer>
        </div>
  );
};
