import Section from 'components/Section';

function Home() {
	const items = [
		{
			id: 1,
			title: 'Sakin Mix',
			description: 'The Kid LAROI, Milky Chance, SEB ve daha fazlası',
			image: 'https://seed-mix-image.spotifycdn.com/v6/img/chill/2tIP7SsRs7vjIcLrU85W8J/tr/default',
			type: 'playlist'
		},
		{
			id: 2,
			title: '2000\'ler Mix',
			description: 'Alex Gaudino, Rihanna, Kesha ve daha fazlası',
			image: 'https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/7vb7VLDqpLTlAy1ctTMR5d/tr/default',
			type: 'playlist'
		},
		{
			id: 3,
			title: 'Happy Mix',
			description: 'Jubël, Jason Derulo, Christian French ve daha fazlası',
			image: 'https://seed-mix-image.spotifycdn.com/v6/img/happy/6eUKZXaKkcviH0Ku9w2n3V/en/default',
			type: 'playlist'
		},
		{
			id: 4,
			title: 'Throwback Party',
			description: 'Here it is, the playlist for the ultimate throwback bash!',
			image: 'https://i.scdn.co/image/ab67706f00000002aa1eeba84e355e537a6e8c41',
			type: 'playlist'
		},
		{
			id: 5,
			title: 'Kaan Boşnak',
			description: 'Sanatçı',
			image: 'https://i.scdn.co/image/ab6761610000f178a032b32976dab48e38e9ee12',
			type: 'artist'
		},
		{
			id: 6,
			title: 'Yabancı Pop',
			description: 'Hit pop trendleri. Kapak: Rihanna',
			image: 'https://i.scdn.co/image/ab67706f0000000279e1853418390fc65fc272e1',
			type: 'podcast'
		},
		{
			id: 7,
			title: 'CKay Mix',
			description: 'Aya Nakamura, Rema, Vegedream ve daha fazlası',
			image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/048LktY5zMnakWq7PTtFrz/tr/default',
			type: 'playlist'
		}
	];

	return (
		<div className="grid gap-y-8">
			<Section
				title="Yakınlarda Çalınanlar"
				more="/blabla"
				items={items}
			/>
			<Section
				title="İyi hisset"
				more="/blabla"
				items={items}
			/>
			<Section
				title="Günlük müzik ihtiyacın."
				more="/blabla"
				items={items}
			/>
		</div>
	);
}

export default Home;
