import '../css/Main.css';

function Main() {
  return (
		<>
			{/* 검색창 만들기
				제출하면 Search 화면으로 이동 */}
			<form className='searchText'>
				<input type='text' />
				<input type='submit' />
			</form>
			{/* 현재위치 기준 지도 불러오기
			초기화면 : 현재위치, 전체보기
			드래그로 이동 및 확대, 축소 기능 필요 */}
			<div className='bg'>
				{/* 도서관 위치 및 운영중 여부 표시 */}
				{/* 표식 클릭하면 해당 도서관 정보로 Info 화면 보여주기 */}
			</div>
			{/* 현위치 지도보기 */}
			<div className='crntLocation'>
			</div>
			{/* 토글로 전체보기 or 운영중인 곳만 보기 선택 */}
			<div className='viewToggle'>
			</div>
			{/* 목록으로 보기 버튼
				클릭하면 List 화면 보여주기 */}
			<div className='viewList'>

			</div>
    </>
  );
}

export default Main;
