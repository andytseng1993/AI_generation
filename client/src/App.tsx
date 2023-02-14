import {
	createBrowserRouter,
	createRoutesFromElements,
	Link,
	Navigate,
	Route,
	RouterProvider,
	Routes,
} from 'react-router-dom'
import HomePages from './pages/HomePage'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<HomePages />}>
				<Route index element={<h1>123</h1>} />
				<Route path="create-image" element={<h1>Create Image</h1>} />
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
