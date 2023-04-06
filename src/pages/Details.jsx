import { useParams, useNavigate } from "react-router-dom";
function Details(props) {
  let { id } = useParams();
  console.log("파라미터", id);
  console.log("파라미터 아이디", typeof id);
  console.log("디테일페이지", props.data);
  let findId = props.data.find(function (x) {
    //props.data 배열에서 find() 메소드를 사용해서
    // 조건에 맞는 첫 번째 요소를 찾는다.
    return x.id == id;
    // 객체의 ID 속성 값이 id 변수와 같은지 비교해서
    // true 인 경우 해당 요소를 반환한다는 의미
  });
  console.log("findId", findId.id);
  console.log("findId", typeof findId.id);
  let navigate = useNavigate();

  //   id = Number(id);

  return (
    <div>
      <h1>디테일 페이지입니다.</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로
      </button>
      <div>{findId.title}</div>
      <img src={`/img/${findId.img}`} alt="{props.data[0].title}" />
    </div>
  );
}

export default Details;
