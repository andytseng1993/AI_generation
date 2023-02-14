import { Link, Outlet } from 'react-router-dom'

const HomePages = () => {
	return (
		<>
			<header>
				<Link to={'/'}>
					<img src={'../assets/logo.svg'}></img>
				</Link>
			</header>
			<Outlet />
		</>
	)
}

export default HomePages
