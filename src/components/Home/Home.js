import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const Home = () => {
	return (
		<section className='px-12'>
			<header className='my-8'>
				<h1 className='md:text-2xl lg:text-3xl sm:text-xl font-bold'>
				Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More.
				</h1>
				<p className='flex items-center'>
					<span className='pr-2 text-sm'>Multi-Day Course </span>
					<AiOutlineQuestionCircle /> </p>
			</header>
		</section>
	);
};

export default Home;