import Section1 from "./pages/section1";
import Section2 from "./pages/section2";
import Section3 from "./pages/section3";
import Section4 from "./pages/section4";
import Section5 from "./pages/section5";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import "./App.css";
import data from "./pages/data";
import { useState } from "react";
import Details from "./pages/Details";

function App() {
  let [pd, setPd] = useState(data);
  let nav = useNavigate();
  console.log("루트영역", pd);
  return (
    <div className="App mw">
      <header className="App_header ">
        <Link to="/" className="logo">
          <img src="/img/logo.svg" alt="로고" />
        </Link>

        <nav className="gnb">
          <Link to="/sec2">Section2</Link>
          <Link to="/sec3">Section3</Link>
          <Link to="/sec4">Section4</Link>
          <Link to="/sec5">Section5</Link>
        </nav>
        {/* useNavigate 경로로도 사용가능 또는 숫자 -1 전페이지, 1은 다음페이지 등등 히스토리를 기억한다. */}
        <button
          onClick={() => {
            nav("./경로");
          }}
        >
          nav
        </button>
        <Link to="/" className="person">
          개인페이지
        </Link>
      </header>

      <h2 className="mw appSub">ВЫБИРАЙ СВОЙ СТИЛЬ</h2>
      {/* 라우티드 중첩 활용
     <Route path="/sec3" element={<Section3 />}>
          <Route path="memeber" element={<div>회사소개</div>}></Route>
          <Route path="location" element={<div>회사위치</div>}></Route>
        </Route>
d*/}
      <Routes>
        <Route path="*" element={<div> 페이지 없음 (404) </div>} />
        <Route path="/" element={<Section1 />} />
        <Route path="/sec2" element={<Section2 data={pd} />} />
        <Route path="/sec3" element={<Section3 />}>
          <Route path="memeber" element={<div>회사소개</div>}></Route>
          <Route path="location" element={<div>회사위치</div>}></Route>
        </Route>
        <Route path="/sec4" element={<Section4 />} />
        <Route path="/sec5" element={<Section5 />} />
        <Route path="/detail/:id" element={<Details data={pd} />} />
      </Routes>

      <footer>
        <div className="footer mw">
          <div className="ftT">
            <a href="#none" className="ftTlogo">
              <img src="/img/ftlogo.svg" alt="이미지" />
            </a>
            <nav className="ftGnb">
              <a href="#none">HOME</a>
              <a href="#none">О НАС</a>
              <a href="#none"> ОФЕРТА</a>
              <a href="#none">КОРЗИНА</a>
              <a href="#none">FAQ</a>
            </nav>
          </div>
          <div className="ftB">
            <div className="snsIcon">
              <a href="#none">
                <img src="/img/path394.png" alt="asdf" />
              </a>
              <a href="#none">
                <img src="/img/path396.png" alt="sns" />
              </a>
              <a href="#none">
                <img src="/img/Group 17.png" alt="sns" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
