import { Outlet } from "react-router";
import styled from "styled-components";

function Section3() {
  let Box = styled.div`
    background-color: tomato;
    width: 500px;
    height: 50px;
  `;
  let Btn = styled.button`
    background-color: ${(props) => props.bg};
    outline: none;
    border: none;
    padding: 1rem;
    cursor: pointer;
    color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  `;
  return (
    <>
      <Outlet></Outlet>

      <div className="sec3 mw">
        <p>Section 3 content</p>
        <Box>안녕</Box>
        <Btn bg="orange">오렌지 버튼</Btn>
        <Btn bg="blue">파란색 버튼</Btn>
      </div>
    </>
  );
}
export default Section3;
