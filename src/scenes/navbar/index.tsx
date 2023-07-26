import { useState, useEffect } from "react"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { useAnimate, stagger } from "framer-motion"
import { MenuToggle } from "./MenuToggle"

type Props = {
	isTopOfPage: boolean
	selectedPage: SelectedPage
	setSelectedPage: (value: SelectedPage) => void
}

function useMenuAnimation(isOpen: boolean) {
	const [scope, animate] = useAnimate()

	useEffect(() => {
		const menuAnimations: any = isOpen
			? [
					[
						"nav",
						{ transform: "translateX(0%)" },
						{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
					],
					[
						"li",
						{ transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
						{ delay: stagger(0.05), at: "-0.1" },
					],
			  ]
			: [
					[
						"li",
						{ transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
						{ delay: stagger(0.05, { from: "last" }), at: "<" },
					],
					["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
			  ]

		animate([
			["path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }, { at: "<" }],
			["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
			["path.bottom", { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }, { at: "<" }],
			...menuAnimations,
		])
	}, [isOpen])

	return scope
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
	const flexBetween = "flex items-center justify-between"
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
	const navbarBackground = isTopOfPage ? "" : "opacity-95 bg-gradient-to-r from-white to-[#FFE1E0]"

	const scope = useMenuAnimation(isMenuToggled)

	return (
		<div ref={scope}>
			<div className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6`}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* LEFT SIDE */}
						<img alt='logo' sizes='113px' width='113px' height='24px' src={Logo} />
						{/* RIGHT SIDE */}
						{isAboveMediumScreens ? (
							<div className={`${flexBetween} w-full`}>
								<div className={`${flexBetween} gap-8 text-sm`}>
									<Link
										page='Home'
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page='Benefits'
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page='Our Classes'
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page='Contact Us'
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</div>
								<div className={`${flexBetween} gap-8`}>
									<p>Sign In</p>
									<ActionButton setSelectedPage={setSelectedPage}>
										Become a Member
									</ActionButton>
								</div>
							</div>
						) : (
							<MenuToggle toggle={() => setIsMenuToggled(!isMenuToggled)} />
						)}
					</div>
				</div>
			</div>
			{/* MOBILE MENU MODAL */}
			{!isAboveMediumScreens && isMenuToggled && (
				<nav className='will-change-transform translate-x-full fixed right-0 bottom-0 z-40 h-full w-[230px] bg-primary-100 drop-shadow-xl'>
					{/* MENU ITEMS */}

					<ul className='ml-[10%] flex flex-col pt-[100px] gap-10 text-2xl'>
						<li className='origin-[-20px_50%] will-change-transform'>
							<Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
						</li>
						<li className='origin-[-20px_50%]'>
							<Link
								page='Benefits'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</li>
						<li className='origin-[-20px_50%]'>
							<Link
								page='Our Classes'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</li>
						<li className='origin-[-20px_50%]'>
							<Link
								page='Contact Us'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</li>
					</ul>
				</nav>
			)}
		</div>
	)
}

export default Navbar
