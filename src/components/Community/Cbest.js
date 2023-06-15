import {React,useState,useEffect,useRef} from 'react';
import './Cbest.css';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Cbest(props) {
   const navigate=useNavigate();
   const[days,setDays] = useState([]);
   const [category, setCategory] = useState("");
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");

   const titleRef=useRef(null);
   const bodyRef=useRef(null);
   const writerRef=useRef(null);

        function onSubmit(e){
            e.preventDefault();

            const requestBody = {
            title: titleRef.current.value,
            content: bodyRef.current.value,
            author: writerRef.current.value
            };

            fetch('http://localhost:8080/api/community/posts', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                  }).then(res => res.json())
                    .then(data => {
                      setTitle(data.title);
                      setAuthor(data.author);
                      alert('게시글이 등록되었습니다.');
                      navigate('/Community');
                    })
                    .catch(error => {
                      console.error('Error:', error);
                      alert('게시글 등록에 실패했습니다.');
                    });
          }
         
    return (
        <div className="Cbest">
            <div className="cbest_main">
                <form className="cbest_from" onSubmit={onSubmit}>
                    
                    <h2 className="cbest_h2">게시물 올리기</h2>
                    <div className="choice">
                    <select>
                        <option>체중 감량</option>
                        <option>근력강화</option>
                        <option>식단조절</option>
                        
                    </select>
                    </div>
                    <div className="cbest_input">
                    <h3>제목</h3>
                    <input type="name" name="title" placeholder='제목을 입력해주세요' ref={titleRef}/>
                    </div>
                    <div className="cbest_text">
                    <h3>내용</h3>
                    <textarea  name="body" className="cbest_textarea" placeholder='내용을 입력해주세요' ref={bodyRef}/>
                    </div>
                    <div className="cbest_input">
                        <h2>작성자</h2>
                    <input type="name" name="title" placeholder='제목을 입력해주세요' ref={writerRef}/>

                    </div>
                    
                    <div className="cbest_button">
        
                   <button>등록하기</button>
                    <button><Link to="strap"style={{ textDecoration: "none" ,color:"#ffff"}}>목록으로</Link></button>

                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Cbest;