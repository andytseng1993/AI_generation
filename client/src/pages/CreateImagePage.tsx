import { FormEvent, useState } from 'react'
import FormField from '../components/FormField'
import { logo, preview } from '../assets'
import PhotoSize from '../components/PhotoSize'
import Prompts from '../constant/Prompts'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'

interface imageData {
	prompt: string
	size: string
}
interface formData {
	name: string
	prompt: string
	image: string
}

const CreateImagePage = () => {
	const [name, setName] = useState('')
	const [prompt, setPrompt] = useState('')
	const [photo, setPhoto] = useState('')
	const [size, setSize] = useState('256x256')
	const [warning, setWarning] = useState(false)

	const mutation = useMutation({
		mutationFn: async (imageData: imageData) => {
			const { data } = await axios.post('/api/dalle', imageData)
			return data
		},
		onSuccess: (data) => {
			setPhoto(`data:image/jpeg;base64,${data.photo}`)
		},
	})

	const mutationShare = useMutation({
		mutationFn: async (formData: formData) => {
			const { data } = await axios.post('/api/posts', formData)
			return data
		},
		onSuccess: (data) => {
			// setPhoto(`data:image/jpeg;base64,${data.photo}`)
		},
	})

	const handleRandomPrompts = () => {
		const randomIndex = Math.floor(Math.random() * Prompts.length)
		const randomPrompt = Prompts[randomIndex]
		if (prompt === randomPrompt) {
			handleRandomPrompts()
		}
		return setPrompt(randomPrompt)
	}
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		if (
			mutation.data.photo === '' ||
			name.trim() === '' ||
			prompt.trim() === ''
		)
			return
		const formData = {
			name: name,
			prompt: prompt,
			image: mutation.data.photo,
		}
		mutationShare.mutate(formData)
	}

	const generateImage = () => {
		if (prompt.trim() === '') return setWarning(true)
		setWarning(false)
		const imageData = {
			prompt: prompt,
			size: size,
		}
		mutation.mutate(imageData)
	}

	return (
		<section className="max-w-7xl mx-auto">
			<div>
				<h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
				<p className="mt-2 text-[#666e75] text-[14px] max-w-[700px]">
					Generate an imaginative image through DALL-E AI and share it with the
					community
				</p>
			</div>
			<form className="m-auto mt-4 max-w-3xl" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-5">
					<FormField
						name="name"
						labelName="Your Name"
						inputType="text"
						placeholder="John, Andy..."
						value={name}
						setValue={setName}
					/>
					<FormField
						name="Prompt"
						labelName="prompt"
						inputType="text"
						placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
						value={prompt}
						setValue={setPrompt}
						random={true}
						handleRandomPrompts={handleRandomPrompts}
					/>
					<div>
						<PhotoSize size={size} setSize={setSize} />
					</div>
					<div>
						{photo ? (
							<img
								src={photo}
								alt={prompt}
								className="min-w-[250px] w-7/12 h-7/12 object-contain m-auto p-2 border rounded border-slate-300 my-2"
							/>
						) : (
							<img
								src={preview}
								alt={'preview'}
								className="min-w-[250px] w-6/12 h-6/12 object-contain opacity-40 m-auto p-2 border rounded border-slate-300 my-2"
							/>
						)}
					</div>
				</div>
				<div className="mt-5 flex flex-col gap-5">
					{warning ? (
						<small className="-mt-4 -mb-3 ml-5 text-red-500">
							Please enter some prompt!
						</small>
					) : null}
					<motion.button
						whileHover={{
							backgroundColor: 'rgb(17, 83, 41)',
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.99 }}
						type="button"
						onClick={generateImage}
						className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
					>
						{mutation.isLoading
							? 'Generating...'
							: mutation.isError
							? 'An error occurred'
							: 'Generate Image'}
					</motion.button>
					<div>
						<p className=" text-[#666e75] text-[14px]">
							** Once you have created the image you want, you can share it with
							others in the community **
						</p>
						<motion.button
							whileHover={{
								backgroundColor: 'rgb(53, 55, 140)',
								transition: { duration: 0.2 },
							}}
							whileTap={{ scale: 0.99 }}
							disabled={photo.trim() === '' ? true : false}
							type="submit"
							className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full  px-5 py-2.5 text-center"
						>
							{mutationShare.isLoading
								? 'Sharing...'
								: mutationShare.isError
								? 'Server error occurred'
								: 'Share with the Community'}
						</motion.button>
					</div>
				</div>
			</form>
		</section>
	)
}

export default CreateImagePage
