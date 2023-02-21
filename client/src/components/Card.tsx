import { useRef } from 'react'
import { download } from '../assets'

interface CardProps {
	id: string
	name: string
	prompt: string
	image: string
}

const Card = ({ id, name, prompt, image }: CardProps) => {
	const downloadRef = useRef<HTMLAnchorElement>(null)
	const handleDownload = () => {
		if (downloadRef) {
			downloadRef.current?.click()
		}
	}

	return (
		<div className="rounded-xl group relative shadow-sm hover:shadow-lg card ">
			<img
				src={`data:image/png;base64,${image}`}
				className="w-full h-auto object-cover rounded-xl"
				alt={prompt}
			/>
			<div className="group-hover:flex hidden flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-[#201616b3] m-2 p-4 rounded-md">
				<p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
				<div className="mt-5 flex justify-between items-center gap-2">
					<div className="flex items-center gap-2">
						<div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
							{name[0]}
						</div>
						<p className="text-white">{name}</p>
					</div>
					<button
						type="button"
						className="outline-none bg-transparent border-none"
						onClick={handleDownload}
					>
						<img
							src={download}
							alt="download"
							className="w-6 h-6 object-contain invert"
						/>
					</button>
					<a
						ref={downloadRef}
						className="hidden"
						href={`data:image/jpeg;base64,${image}`}
						download={`${id}.png`}
					></a>
				</div>
			</div>
		</div>
	)
}

export default Card
