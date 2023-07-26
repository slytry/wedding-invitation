export const Location = () => {
	return (
		<div style={{ position: "relative", overflow: "hidden" }}>
			<a
				href="https://yandex.ru/maps/org/zhardin/1300698565/?utm_medium=mapframe&utm_source=maps"
				style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
			>
				Jardin
			</a>
			<a
				href="https://yandex.ru/maps/39/rostov-na-donu/category/restaurant/184106394/?utm_medium=mapframe&utm_source=maps"
				style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
			>
				Restaurant in Rostov‑na‑Donu
			</a>
			<iframe
				title="Map"
				src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=39.791097%2C47.200293&mode=poi&origin=jsapi_2_1_79&poi%5Bpoint%5D=39.790754%2C47.200571&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1300698565&z=19.13"
				width="100%"
				height={500}
				allowFullScreen={true}
				style={{ position: "relative", border: 0 }}
			/>
		</div>
	);
};
