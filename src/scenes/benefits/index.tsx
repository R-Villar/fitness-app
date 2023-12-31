import HText from "@/shared/HText"
import { BenefitsType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.webp"

const benefits: Array<BenefitsType> = [
	{
		icon: <HomeModernIcon className='h-6 w-6' />,
		title: "State of the Art Facilities.",
		description:
			"Experience EVOGYM, the cutting-edge gym with AI-powered equipment, diverse classes, and a luxurious spa. Join a supportive community, track your progress digitally, and embark on a journey to a healthier you!",
	},
	{
		icon: <UserGroupIcon className='h-6 w-6' />,
		title: "100's of Diverse Classes.",
		description:
			"Welcome to EVOGYM, your ultimate gym for diverse fitness classes. Choose from HIIT to yoga, catering to all levels. Our expert instructors create a supportive, motivating environment for your best performance. Start your journey to a healthier lifestyle now!",
	},
	{
		icon: <AcademicCapIcon className='h-6 w-6' />,
		title: "Expert and Pro Trainers",
		description:
			"EVOGYM sets the standard for excellence with our team of expert trainers. Highly skilled and certified professionals, they personalize workouts to help all fitness levels reach their goals efficiently and safely.",
	},
]

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
}

type Props = {
	setSelectedPage: (value: SelectedPage) => void
}
const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
				{/* HEADER */}
				<motion.div
					className='md:my-5 md:my-3/5'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText>MORE THAN JUST A GYM.</HText>
					<p className='my-5 text-sm'>
						We provide world class fitness equipment, trainers and classes to get you to your
						ultimate fitness goals with ease. We provide true care into each and every member.
					</p>
				</motion.div>
				{/* BENEFITS */}
				<motion.div
					className='md:flex items-center justify-between gap-8 mt-5'
					initial='active'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
				>
					{benefits.map((benefit: BenefitsType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>

				{/* GRAPHICS AND DESCRIPTION */}
				<div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
					{/* GRAPHIC */}
					<motion.img
						className='mx-auto'
						sizes='490px'
						width='490px'
						height='553px'
						alt='benefits-page-graphic'
						src={BenefitsPageGraphic}
						whileHover={{ scale: 1.2 }}
						transition={{ type: "spring", stiffness: 100, damping: 100 }}
					/>
					{/* DESCRIPTION */}
					<div>
						{/* TITLE */}
						<div className='relative'>
							<div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
								<motion.div
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 },
									}}
								>
									<HText>
										MILLIONS OF HAPPY MEMBERS GETTING{" "}
										<span className='text-primary-500'>FIT</span>
									</HText>
								</motion.div>
							</div>
						</div>
						{/* DESCRIPTION */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<p className='my-5'>
								Discover EVOGYM the cutting-edge gym with state-of-the-art facilities.
								Experience interactive AI-powered equipment, diverse group fitness classes,
								and a luxurious spa area for post-workout relaxation. Join a supportive
								community and track your progress digitally. Your journey to a healthier you
								begins here!
							</p>
						</motion.div>

						{/* BUTTON */}
						<div className='relative mt-16'>
							<div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
								<ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}
export default Benefits
