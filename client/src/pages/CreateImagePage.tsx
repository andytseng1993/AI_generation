import { useState } from 'react'
import FormField from '../components/FormField'
import { preview } from '../assets'

const CreateImagePage = () => {
	const [name, setName] = useState('')
	const [prompt, setPrompt] = useState('')
	const [photo, setPhoto] = useState('')
	const [size, setSize] = useState('256x256')
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
			<form className="mt-10 max-w-3xl" onSubmit={handleSubmit}>
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
					/>
					<div>
						256x256, 512x512, or 1024x1024 pixels
						<label>Size:</label>
						<input></input>
					</div>
					<div>
						{photo ? (
							<img
								src={photo}
								alt={prompt}
								className="w-full h-full object-contain"
							/>
						) : (
							<img
								src={preview}
								alt={'preview'}
								className="w-7/12 h-7/12 object-contain opacity-40"
							/>
						)}
					</div>
				</div>
			</form>
		</section>
	)
}

export default CreateImagePage
