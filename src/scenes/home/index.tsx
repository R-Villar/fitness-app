import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.webp"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

type Props = {
	setSelectedPage: (value: SelectedPage) => void
}
const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

	return (
		<section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
			{/* IMAGE AND MAIN HEADER */}
			<motion.div
				className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
			>
				{/* MAIN HEADER  */}
				<div className='z-10 mt-32 md:basis-3/5'>
					{/* HEADINGS */}
					<motion.div
						className='md:-mt-20'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<motion.div
							className='relative'
							whileHover={{ scale: 1.1 }}
							transition={{ type: "spring", stiffness: 50, damping: 50, duration: 1 }}
						>
							<div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
								<img
									alt='home-page-text'
									sizes='489px'
									width='489px'
									height='163px'
									src={HomePageText}
								/>
							</div>
						</motion.div>
						<p className='mt-8 text-sm'>
							Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get
							the Body Shapes That you Dream of.. Get Your Dream Body Now.
						</p>
					</motion.div>
					{/* ACTIONS */}
					<motion.div
						className='mt-8 flex items-center gap-8'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
						<AnchorLink
							className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
							onClick={() => setSelectedPage(SelectedPage.ContactUs)}
							href={`#${SelectedPage.ContactUs}`}
						>
							<p>Learn More</p>
						</AnchorLink>
					</motion.div>
				</div>

				{/* IMAGE */}
				<motion.div
					className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'
					whileHover={{ scale: 1.2 }}
					transition={{ type: "spring", stiffness: 100, damping: 100 }}
				>
					<img
						alt='home-pageGraphic'
						sizes='575px'
						width='575px'
						height='628px'
						src={HomePageGraphic}
					/>
				</motion.div>
			</motion.div>

			{/* SPONSORS */}
			{isAboveMediumScreens && (
				<div className='h-[150px] w-full bg-primary-100 py-10'>
					<div className='mx-auto w-5/6'>
						<div className='flex w-3/5 items-center justify-between gap-8'>
							<img
								alt='redbull-sponsor'
								sizes='92px'
								width='92px'
								height='54px'
								src={SponsorRedBull}
							/>
							<img
								alt='forbes-sponsor'
								sizes='103px'
								width='103px'
								height='28px'
								src={SponsorForbes}
							/>
							<img
								alt='fortune-sponsor'
								sizes='113px'
								width='113px'
								height='26px'
								src={SponsorFortune}
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
export default Home
