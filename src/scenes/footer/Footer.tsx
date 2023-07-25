import Logo from "@/assets/Logo.png"

const Footer = () => {
	return (
		<footer className='bg-primary-100 py-16'>
			<div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
				<div className='mt-16 basis-1/2 md:mt-0'>
					<img alt='logo' src={Logo} />
					<p className='my-5 '>
						Consequat consequat voluptate enim sint esse culpa amet amet lorem lorem elit mollit
						exercitation enim tempor aliqua fugiat. Elit sint in nisi non labore aliqua nostrud
						amet nisi irure.
					</p>
					<p>© Evogym All Rights Reserved.</p>
				</div>
				<div className='mt-16 basis-1/4 md:mt-0'>
					<h4 className='font-bold'>LINKS</h4>
					<p className='mt-5'>anim laborum irure</p>
					<p className='mt-5'>In minim tempor</p>
					<p className='mt-5'>In minim tempor</p>
				</div>
				<div className='mt-16 basis-1/4 md:mt-0'>
					<h4 className='font-bold'>Contact Us</h4>
					<p className='mt-5'>Exercitation excepteur sit</p>
					<p>(555)555-5555</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer
