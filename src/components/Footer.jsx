import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
		<footer className='bg-dark text-light-darker pt-16 pb-8 border-t border-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
					{/* Brand Info */}
					<div className='col-span-1 md:col-span-1'>
						<a href='#home' className='flex items-center gap-2 mb-4'>
							<span className='text-primary text-3xl font-heading font-black tracking-tighter'>
								GORILLA<span className='text-white'>FIT</span>
							</span>
						</a>
						<p className='text-gray-400 mb-6'>
							Elevate your fitness journey with state-of-the-art equipment and
							expert guidance at Gorilla Fitness.
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='text-gray-400 hover:text-primary transition-colors'>
								<FiFacebook className='w-6 h-6' />
							</a>
							<a
								href='#'
								className='text-gray-400 hover:text-primary transition-colors'>
								<FiInstagram className='w-6 h-6' />
							</a>
							<a
								href='#'
								className='text-gray-400 hover:text-primary transition-colors'>
								<FiTwitter className='w-6 h-6' />
							</a>
							<a
								href='#'
								className='text-gray-400 hover:text-primary transition-colors'>
								<FiYoutube className='w-6 h-6' />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-white font-bold mb-4 text-lg'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#home'
									className='text-gray-400 hover:text-primary transition-colors'>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='text-gray-400 hover:text-primary transition-colors'>
									About Us
								</a>
							</li>
							<li>
								<a
									href='#classes'
									className='text-gray-400 hover:text-primary transition-colors'>
									Classes
								</a>
							</li>
							<li>
								<a
									href='#trainers'
									className='text-gray-400 hover:text-primary transition-colors'>
									Trainers
								</a>
							</li>
							<li>
								<a
									href='#pricing'
									className='text-gray-400 hover:text-primary transition-colors'>
									Pricing
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className='text-white font-bold mb-4 text-lg'>Services</h3>
						<ul className='space-y-2'>
							<li>
								<span className='text-gray-400'>Personal Training</span>
							</li>
							<li>
								<span className='text-gray-400'>Weight Lifting</span>
							</li>
							<li>
								<span className='text-gray-400'>Cardio Fitness</span>
							</li>
							<li>
								<span className='text-gray-400'>Yoga & Pilates</span>
							</li>
							<li>
								<span className='text-gray-400'>Nutrition Plans</span>
							</li>
						</ul>
					</div>

					{/* Contact Details */}
					<div>
						<h3 className='text-white font-bold mb-4 text-lg'>Visit Us</h3>
						<ul className='space-y-3'>
							<li className='flex'>
								<span className='text-gray-400 break-words'>
									Kalutara, Western Province, Sri Lanka
								</span>
							</li>
							<li>
								<span className='text-gray-400'>Phone: (+94) 00-000-0000</span>
							</li>
							<li>
								<span className='text-gray-400'>
									Email: gorillafit@gmail.com
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-500 text-sm mb-4 md:mb-0'>
						&copy; {new Date().getFullYear()} Gorilla Fitness. All rights
						reserved.
					</p>
					<div className='flex space-x-6'>
						<a
							href='#'
							className='text-gray-500 hover:text-white text-sm transition-colors'>
							Privacy Policy
						</a>
						<a
							href='#'
							className='text-gray-500 hover:text-white text-sm transition-colors'>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
