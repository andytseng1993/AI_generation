import { useState } from 'react'
import FormField from '../components/FormField'
import { logo, preview } from '../assets'
import PhotoSize from '../components/PhotoSize'
import Prompts from '../constant/Prompts'

const CreateImagePage = () => {
	const [name, setName] = useState('')
	const [prompt, setPrompt] = useState('')
	const [photo, setPhoto] = useState('')
	const [size, setSize] = useState('256x256')
	const handleRandomPrompts = () => {
		const randomIndex = Math.floor(Math.random() * Prompts.length)
		const randomPrompt = Prompts[randomIndex]
		if (prompt === randomPrompt) {
			handleRandomPrompts()
		}
		return setPrompt(randomPrompt)
	}
	const handleSubmit = () => {}

	return (
		<section className="max-w-7xl mx-auto">
			<div>
				<h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
				<p className="mt-2 text-[#666e75] text-[14px] max-w-[700px]">
					Generate an imaginative image through DALL-E AI and share it with the
					community
				</p>
			</div>
			<form className="m-auto mt-10 max-w-3xl" onSubmit={handleSubmit}>
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
								className="min-w-[300px] w-full h-full object-contain m-auto p-2 border rounded border-slate-300 "
							/>
						) : (
							<img
								src={preview}
								alt={'preview'}
								className="min-w-[300px] w-7/12 h-7/12 object-contain opacity-40 m-auto p-2 border rounded border-slate-300"
							/>
						)}
					</div>
				</div>
			</form>
		</section>
	)
}

export default CreateImagePage
