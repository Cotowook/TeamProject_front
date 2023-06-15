import React from 'react';
import "./Home.css";


function Home(props) {
    return (
      <>  
            <div className="Home">
          <div className="Home_left">
            <div className="Home_left_bottom">
<div className="Home_left_gym">
  <div className="Home_left_read"><h3>나의 운동 기록</h3></div>
  <div className="Home_left_button">운동 기록 하러 가기  </div>
</div>
<div className="Home_left_record">
  <div className="left_record1"><div className="record1_left"></div>
  <div>권해수</div>
  </div>
  <div className="left_record1">
  <div className="record1_left"></div>
  <div>권해수</div>
  </div>
  <div className="left_record1">
  <div className="record1_left"></div>
  <div>권해수</div>
  </div>
 
  </div>
</div>
          </div>

          <div className="Home_right">
<div className="Home_right_top">
logout
</div>
<div className="Home_right_bottom">
<div className="right_shoplist">
<div className="right_shoplistin">
<p>최근 구매 목록</p>
<div className="shoplistin_menu">
  <div className="shoplistin_menuitem"></div>
  <div className="shoplistin_menuitem"></div>
  <div className="shoplistin_menuitem"></div>
  <div className="shoplistin_menuitem"></div>
  <div className="shoplistin_menuitem"></div>
  <div className="shoplistin_menuitem"></div>
  <div className="shoplistin_menuitem"></div>
  <div className="shoplistin_menuitem"></div>
  <div className="shoplistin_menuitem"></div>
  
</div>
</div>
</div>
<div className="right_shop">
  <p>상품 더 담으러 가기</p>
</div>
</div>
          </div>
        </div>
        <div className="Home_center">
          <div className="Home_Profile">
            <div className="Home_Profile1">
            </div>
            </div>
          <div className="Home_name">
            <h2>권해수 님</h2>
          <p>반갑습니다</p>
          </div>
          <div className="Home_point">
            <h3>포인트</h3>
          <h4>1024p</h4>
          </div>
          <div className="Home_order">
          <h3>주문/배송</h3>
          <h4>조회하기</h4>
          </div>
          <div className="Home_info">
          <h3>내 정보</h3>
          <h4>보기</h4>
          </div>

        </div>
        </>

    );
}

export default Home;