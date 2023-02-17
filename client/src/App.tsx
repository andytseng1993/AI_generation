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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
	const queryClient = new QueryClient()
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
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	)
}

export default App
