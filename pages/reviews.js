import Head from 'next/head';

const Reviews = ({reviews}) => {
	return (
		<>
			<Head>
				<title>Жирные бургеры | Главная</title>
				<meta name='title' content='Жирные бургеры'/>
			</Head>
			<div>
				<h1>Oтзывы клиентов</h1>
				<div className='reviews'>
					{ !!reviews.length && reviews.slice(0, 20).map(res => {
						return(
							<div key={res.id} className='reviews'>
								<p>{res.id} <b>{res.name}</b></p>
								<p>{res.body.slice(0, 90)}...</p>
								<hr/>
							</div>
						)
					})}
				</div>
			</div>
		</>
	);
};
export async function getServerSideProps() {
	const response = await fetch('https://jsonplaceholder.typicode.com/comments')
	const data = await response.json();

	return {
		props: {
			reviews: data.slice(0, 20)
		}
	}
}


export default Reviews;
