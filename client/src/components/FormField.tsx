import { motion } from 'framer-motion'
import { Dispatch, FormEvent, SetStateAction } from 'react'

interface FormFieldProps {
	name: string
	labelName: string
	inputType: string
	placeholder: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
	random?: boolean
	handleRandomPrompts?: () => void
}

const FormField = ({
	name,
	labelName,
	inputType,
	placeholder,
	value,
	setValue,
	random = false,
	handleRandomPrompts,
}: FormFieldProps) => {
	const handleChange = (e: FormEvent) => {
		e.preventDefault()
		let element = e.target as HTMLInputElement
		setValue(element.value)
	}

	return (
		<div>
			<div className="flex items-center gap-5 mb-2">
				<label htmlFor={name} className="block font-medium text-gray-900">
					{labelName}
				</label>
				{random ? (
					<motion.button
						whileTap={{ translateY: '2px' }}
						type="button"
						className="bg-[#EcECF1] text-black px-4 py-0.5 rounded-md text-sm"
						onClick={handleRandomPrompts}
					>
						Random Prompt
					</motion.button>
				) : null}
			</div>
			<input
				type={inputType}
				name={name}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
			/>
		</div>
	)
}

export default FormField
