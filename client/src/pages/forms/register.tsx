import React, { InputHTMLAttributes, useState } from 'react';

import { useRegisterMutation } from '../../generated/graphql';

import { FormControl } from '@chakra-ui/form-control';
import { Button, FormLabel, Input } from '@chakra-ui/react';
import { Formik, Form, useField } from 'formik';
import { toErrorMap } from '../../utils/error-map';
import { Redirect } from 'react-router';

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

const RegisterForm = () => {
	const [, register] = useRegisterMutation();
	const [redirect, setRedirect] = useState(false);
	const renderRedirect = () => (redirect ? <Redirect to="/" /> : null);

	return (
		<Formik
			initialValues={{ email: '', username: '', password: '' }}
			onSubmit={async (values, { setErrors }) => {
				const response = await register(values);
				console.log(response);

				const { status, user, errors } = response.data?.registerUser!;

				if (status !== 'Success') {
					setErrors(toErrorMap(errors!));
				} else if (user) {
					setRedirect(true);
				}
			}}
		>
			{({ isSubmitting }) => {
				return (
					<Form>
						<InputField label="Email" name="email" type="email" />
						<InputField
							label="Username"
							name="username"
							type="username"
						/>
						<InputField
							label="Password"
							name="password"
							type="password"
						/>
						{renderRedirect()}
						<Button
							mt={2}
							type="submit"
							isLoading={isSubmitting ?? false}
							bg="#dddddd"
						>
							Submit
						</Button>

						{/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
					</Form>
				);
			}}
		</Formik>
	);
};

export { RegisterForm };
