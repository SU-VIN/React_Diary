import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = ()=>{
    const[searchParams,setSearchParams]=useSearchParams();
    const navigate = useNavigate();

    const id= searchParams.get('id');
    const mode = searchParams.get('mode');
    return(
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정 페이지 입니다.</p>
            <button onClick={()=>setSearchParams({who:'suvin'})}>QS 바꾸기</button>
            <button onClick={()=>{navigate('/home')}}>홈으로</button>
            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
        </div>
    )
}

export default Edit;