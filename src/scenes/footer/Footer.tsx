import Logo from "@/assets/Logo.png"

const Footer = () => {
	return (
		<footer className='bg-primary-100 py-16'>
			<div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
				<div className='mt-16 basis-1/2 md:mt-0'>
					<img alt='logo' sizes='113px' width='113px' height='24px' src={Logo} />
					<p className='my-5 '>
						Welcome to EVOGYM a state-of-the-art gym with expert trainers and diverse fitness
						classes. Transform your life through our cutting-edge facilities and supportive
						community. Join us for an exhilarating journey to a healthier, stronger, and happier
						you!
					</p>
					<p>© Evogym All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer
