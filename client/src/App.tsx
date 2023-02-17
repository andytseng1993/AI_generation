import {
	createBrowserRouter,
	createRoutesFromElements,
	Link,
	Navigate,
	Route,
	RouterProvider,
	Routes,
} from 'react-router-dom'
import CreateImagePage from './pages/CreateImagePage'
import HomePage from './pages/HomePage'
import NavBar from './pages/NavBar'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<NavBar />}>
				<Route index element={<HomePage />} />
				<Route path="create-image" element={<CreateImagePage />} />
				<Route path="create-text" element={<h1>Create Text</h1>} />
			</Route>
		)
	)
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
