import React, { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { GiSelfLove } from 'react-icons/gi';
import { RiShareForwardLine } from 'react-icons/ri';

import './home.css';

const Home = () => {
	const [imgs, setImg] = useState([]);
	useEffect(() => {
		fetch("images.json")
			.then(res => res.json())
			.then(data => {
				setImg(data)
			})
	}, [])

	const firstImage = imgs.filter(img => img.id === 1);
	const lastTwoImage = imgs.filter(img => img.id !== 1);

	return (
		<section className='px-12 min-h-screen'>
			{/* start the header section  */}
			<header className='my-8'>
				<h1 className='md:text-2xl lg:text-3xl sm:text-xl font-bold'>
					Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More.
				</h1>
				<p className='flex items-center'>
					<span className='pr-2 text-sm'>Multi-Day Course </span>
					<AiOutlineQuestionCircle /> </p>
			</header>
			{/* end of the header section */}
			<main className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				<article>
					<p>
						In this 5 day's class, we will explore artists Monet, Matisse, and Van Gogh, among others, and then recreate paintings using crayons and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.
					</p>
					<div className="avatar flex items-center my-4">
						<div className="w-12 rounded-full">
							<img src="https://i.ibb.co/JdgB55G/teacher.jpg" />
						</div>
						<p className='pl-3 text-primary font-bold'>Kimberly R Moseler</p>
					</div>
					<div className='flex items-center mb-2'>
						<div className="rating">
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" checked />
						</div>
						<p className='pl-2'> 467 total reviews for this teacher</p>
					</div>
					<div className='flex items-center'>
						<div className="rating">
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" checked />
						</div>
						<p className='pl-2'> 5 reviews for this class </p>
					</div>
					<p className='mt-2 font-bold'>Completed by 21 learners</p>

					<div className='mt-8 flex justify-between'>

						{/* <!-- The button to open modal --> */}
						<label for="my-modal" class="btn modal-button btn-primary text-white">See Class Schedule<MdOutlineArrowForwardIos />
						</label>

						{/* <!-- Put this part before </body> tag --> */}
					<input type="checkbox" id="my-modal" class="modal-toggle" />
					<div class="modal">
						<div class="modal-box">
							<h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
							<p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
							<div class="modal-action">
								<label for="my-modal" class="btn">OK </label>
							</div>
						</div>
					</div>

					<p className='text-primary flex items-center font-bold text-lg cursor-pointer'>
						<GiSelfLove /> <span className='pl-2'> save</span>
					</p>
					<p className='text-primary flex items-center font-bold text-lg cursor-pointer mr-12'>
						<RiShareForwardLine /> <span className='pl-2'>share </span>
					</p>
				</div>
			</article>
			{/* end of the article section */}
			<div className="img-container mt-8 lg:mt-0">
				<div className="all-images">
					<div>
						{
							firstImage.map(img =>
								<div key={img.id}>
									<div className="first-img" >
										<img src={img.img} alt="here remain a image!!" />
									</div>
								</div>
							)
						}
					</div>
					<div className="two-images mt-6 md:mt-0">
						{
							lastTwoImage.map(img =>
								<div key={img.id}>
									<div className='mt-4 md:mt-0'>
										<img src={img.img} alt="here remain a image !!" />
									</div>
								</div>
							)
						}
					</div>

				</div>
			</div>
			{/* end of the div section */}
		</main>
			{/* end of the main section */ }
		</section >
	);
};

export default Home;