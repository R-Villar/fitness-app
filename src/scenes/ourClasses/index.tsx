import { SelectedPage, ClassType } from "@/shared/types"
import image1 from "@/assets/image1.webp"
import image2 from "@/assets/image2.webp"
import image3 from "@/assets/image3.webp"
import image4 from "@/assets/image4.webp"
import image5 from "@/assets/image5.webp"
import image6 from "@/assets/image6.webp"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"

const classes: Array<ClassType> = [
	{
		name: "Weight Training Classes",
		description:
			"Unleash your strength with our empowering weight training classes! Led by experienced trainers, these classes cater to all fitness levels, helping you build muscle, tone your body, and boost overall fitness. Join us now to achieve your goals and feel stronger than ever!",
		image: image1,
	},
	{
		name: "Yoga Classes",
		description:
			"Experience tranquility and fitness in our rejuvenating yoga classes. Led by certified instructors, we offer various styles for all levels, promoting flexibility and inner peace. Join us now to embark on a transformative journey of holistic well-being. Namaste!",
		image: image2,
	},
	{
		name: "Ab Core Classes",
		description:
			"Sculpt and strengthen your core in our dynamic ab core classes led by expert instructors. Improve stability, posture, and overall strength with engaging exercises. Join us now to achieve a powerful and toned midsection!",
		image: image3,
	},
	{
		name: "Adventure Classes",
		image: image4,
	},
	{
		name: "Fitness Classes",
		description:
			"Discover exhilarating fitness classes for every goal and passion. Led by certified instructors, our diverse range of activities caters to all levels. Join our vibrant community to elevate your fitness journey and achieve a healthier, happier you!",
		image: image5,
	},
	{
		name: "Training Classes",
		description:
			"Elevate your fitness with transformative training classes led by expert instructors. Personalized guidance for all levels, pushing boundaries, and unlocking your full potential. Join us now and become the best version of yourself!",
		image: image6,
	},
]

type Props = {
	setSelectedPage: (value: SelectedPage) => void
}
const OurClasses = ({ setSelectedPage }: Props) => {
	return (
		<section id='ourclasses' className='w-full bg-primary-100 py-40'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
				<motion.div
					className='mx-auto w-5/6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div className='md:w-3/5'>
						<HText>OUR CLASSES</HText>
						<p className='py-5'>
							Discover the power of our gym classes at EVOGYM With a diverse range of options
							led by expert instructors, you'll experience exciting workouts tailored to your
							fitness level. From high-intensity challenges to calming sessions, our classes
							will inspire and motivate you every step of the way. Join us and elevate your
							fitness journey with the best classes in town!
						</p>
					</div>
				</motion.div>
				<div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
					<ul className='whitespace-nowrap'>
						{/* <ul className='w-[2800px] whitespace-nowrap'> */}
						{classes.map((item: ClassType, index) => (
							<Class
								key={`${item.name}-${index}`}
								name={item.name}
								description={item.description}
								image={item.image}
							/>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	)
}
export default OurClasses
