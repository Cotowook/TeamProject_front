import React from "react";

import Header from "../Header";

import {Route,Routes} from 'react-router-dom';

import Cmain from "./Cmain";
import Cbest from "./Cbest";
import Content from "./Content";

export default function Community() {

  return( 
<div>
<Header />
  <Routes>
         <Route path="/:id" element={<Content/>}/>
          <Route path="/*" element={<Cmain/>} />
          <Route path="Cbest" element={<Cbest/>} />
        </Routes>
  </div>
  );
}
