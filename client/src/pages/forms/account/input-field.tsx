import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';
import { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	name: string;
};

const InputField: React.FC<InputFieldProps> = ({
	label,
	size: _,
	...props
}) => {
	const [field, { error }] = useField(props);

	return (
		<FormControl isInvalid={!!error} mb={2}>
			<FormLabel htmlFor={field.name}>{label}</FormLabel>
			<Input
				{...field}
				{...props}
				id={field.name}
				placeholder={`Enter your ${field.name}`}
			/>
		</FormControl>
	);
};

export { InputField };
