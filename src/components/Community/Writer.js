import React from 'react';
import {useRef,useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Content.css'

function Writer(props) {
    const [con,setCon]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        fetch("http://localhost:4000/content")
        .then(response=>{
          return response.json();
        })
        .then(data=>{
          setCon(data);
        });
    },[]);

    function onSubmit(e){
        fetch(`http://localhost:4000/content`,{
          method: 'POST',
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body:bodyRef.current.value
           
          }),
    
        }).then(res=>{
          if(res.ok){
            console.log("생성 되었습니다.");
          }
        });
      }
      const bodyRef=useRef(null);
    return (
        <div>
             <div className="content_read">
           <div className="content_read_pic"></div>
            <form className="content_form" onSubmit={onSubmit}>
            <textarea className="content_textarea"  ref={bodyRef}/>
            <button className="content_button">댓글 달기</button>
            </form >
            </div>
            {con.map(content=>(
           <div className="content_writer">
            <div className="content_writer_pic"></div>
           
            <div className="content_writer_text">
                <div className="content_writer_name">이름</div>
                <div className="content_writer_content">{content.body}</div>
                <div className="content_writer_time">시간</div>
            </div>
       
           </div>
            ))}
        </div>
    );
}

export default Writer;