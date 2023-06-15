import React from 'react';
import Rmain from "./Rmain";
function Golf(props) {
    const names=[["이름1","sdsd","지역",1231],["이름1","sdsd","지역",1231],["이름1","sdsd","지역",1231],["이름1","sdsd","지역",1231],["이름1","sdsd","지역",1231],
    ["이름1","sdsd","지역",1231],["이름1","sdsd","지역",1231],["이름1","sdsd","지역",1231]];
    const namelist=names.map((v)=>(<Rmain name={v[0]} number={v[1]} local={v[2]} price={v[3]}/>));
    return (
        <div className="Rap_main">
           {namelist}
        </div>
    );
}

export default Golf;