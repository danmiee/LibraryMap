import '../css/Main.css';
import MapContainer from './MapContainer'

function Main() {
	return (
		<div className='main'>
			{/* 검색창 만들기 */}
			{/* 기능 : 제출하면 Search 화면으로 이동 */}
			<form className='searchText'>
				<input type='text' />
				<input type='submit' />
			</form>

			{/* 현위치 지도보기 아이콘 */}
			<button className='crntLocation' aria-label='현재위치 표시 버튼'>
				현위치
			</button>

			{/* 전체보기 or 운영중인 곳만 보기 선택 토글 */}
			<button className='viewToggle' aria-label='보기 형식 선택 버튼'>
				보기 선택
			</button>

			{/* 목록으로 보기 버튼 */}
			{/* 기능 : 클릭하면 List 화면 보여주기 */}
			<div className='viewList'>
				<button className='viewButton' aria-label='목록으로 보기 버튼'>
					목록으로 보기
				</button>
			</div>
			{/* 지도 가져오기 */}
			<div>
				{/* <MapContainer /> */}
			</div>
		</div>
	);
}

export default Main;
