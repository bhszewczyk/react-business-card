import React from 'react';
import './Information.css';

function Information() {
	return (
		<section className='user'>
			<img
				className='user-img'
				src='../images/cvImg.jpeg'
				alt='Barbara Darowska photo'
			/>
			<div className='user-info'>
				<h1>Barbara Darowska</h1>
				<h3>Aspiring Frontend Developer</h3>
			</div>
			<div className='user-contact'>
				<a
					className='btn btn-contact btn-contact--email'
					href='mailto:bhszewczyk@gmail.com'
				>
					<i class='fa-regular fa-envelope'></i>Email
				</a>
				<a
					href='https://www.linkedin.com/in/bdarowska/'
					className='btn btn-contact btn-contact--linkedin'
				>
					<i class='fa-brands fa-linkedin-in'></i>Linkedin
				</a>
			</div>
		</section>
	);
}

export default Information;
