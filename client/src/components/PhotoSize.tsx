import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'

interface PhotoSizeProps {
	size: string
	setSize: Dispatch<SetStateAction<string>>
}

const PhotoSize = ({ size, setSize }: PhotoSizeProps) => {
	const pixels = ['256x256', '512x512', '1024x1024']
	return (
		<>
			<label className="block font-medium text-gray-900 mb-2">Size</label>
			<ul className="inline-flex p-2 rounded-lg items-center border-gray-300 border grow-0 ">
				{pixels.map((pixel) => (
					<li
						key={pixel}
						className={`flex items-center relative cursor-pointer rounded px-5 h-7 transition duration-150 ease-out bg-zinc-100 ${
							size === pixel ? 'bg-zinc-300 ' : ''
						}`}
						onClick={() => setSize(pixel)}
					>
						{pixel}
						{pixel === size ? (
							<motion.div
								className="absolute w-full left-0 right-0 -bottom-px h-px bg-zinc-600"
								layoutId="underline"
								layout
							/>
						) : null}
					</li>
				))}
			</ul>
		</>
	)
}

export default PhotoSize
