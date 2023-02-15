import { Dispatch, FormEvent, SetStateAction } from 'react'

interface FormFieldProps {
	name: string
	labelName: string
	inputType: string
	placeholder: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
}

const FormField = ({
	name,
	labelName,
	inputType,
	placeholder,
	value,
	setValue,
}: FormFieldProps) => {
	const handleChange = (e: FormEvent) => {
		e.preventDefault()
		let element = e.target as HTMLInputElement
		setValue(element.value)
	}

	return (
		<div>
			<div className="flex items-center gap-2 mb-2">
				<label
					htmlFor={name}
					className="block text-sm font-medium text-gray-900"
				>
					{labelName}
				</label>
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
