import {React} from 'react';
import './Cmain.css';
import Cmain_map from './Cmain_map';
import {Link,Route,Routes} from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Cbest from './Cbest';
function Cmain() {
    return (
        <div className="Cmain">
            
        <div className="cmain_main">
      
            <div className="cmain_ab">
            <div className="cmain_a"/>
            </div>
            <div className="search_container">
            <ul>
              <li>
                <a className="option_title" href="/#">
                  카테고리를 선택하세요
                </a>
                <ul className="options_container">
                  <li className="option_parent">
                    <a className="option">근력강화</a>
                  </li>
                  <li className="option_parent">
                    <a className="option">식단조절</a>
                  </li>
                  <li className="option_parent">
                    <a className="option">체중감량</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <input
                className="search_post_input"
                placeholder="무엇이 궁금하세요?"
              />
              <button>
                <FiSearch />
              </button>
            </div>
            <Link to="/Community/Cbest" style={{ textDecoration: "none" ,color:"black"}}>
            <button className="btn_write">글쓰기</button>
            </Link> 
           
          </div>
            <hr/>
            <div className="cmain_crud">
            <div className="crud_main">
             <div className="crud_map" >
                <Cmain_map/>
             </div>
            </div>
            
        </div>
        <div class="pagination-box">
        <a className="paging_btn">1</a>
        <a className="paging_btn">2</a>
        <a className="paging_btn">3</a>
        <a className="paging_btn">4</a>
      </div>
        </div>
        
        <Routes>
            <Route path="Cbest" element={<Cbest/>} />
            </Routes>
        
        </div>
    );
}

export default Cmain;