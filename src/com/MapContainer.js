import React, { useEffect } from 'react'

const kakao = { window };

function MapContainer() {
	useEffect(() => {
		const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
		const map = new kakao.maps.Map(container, options);
	}, [])
	return (
		<>
			{/* 지도 담을 영역 */}
			<div id='map'>
				{/* 초기화면 : 현재위치, 전체보기 */}

				{/* 기능 */}
				{/* 드래그로 이동 및 확대, 축소 */}
				{/* 도서관 위치 및 운영중 여부 표시 */}
				{/* 핀 클릭하면 해당 도서관 정보로 Info 화면 보여주기 */}
			</div>
		</>
	);
}

export default MapContainer;