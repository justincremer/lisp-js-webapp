import { useState } from 'react';
import { Redirect } from 'react-router';

import { Box, Button, Center } from '@chakra-ui/react';
import { Formik, Form } from 'formik';

import { useRegisterMutation } from '../../../generated/graphql';
import { toErrorMap } from '../../../utils';
import { InputField } from './input-field';

const RegisterForm = (): JSX.Element => {
	const [, register] = useRegisterMutation();
	const [redirect, setRedirect] = useState(false);
	const renderRedirect = () => (redirect ? <Redirect to="/" /> : null);

	return (
		<Formik
			initialValues={{ email: '', username: '', password: '' }}
			onSubmit={async (values, { setErrors }) => {
				const response = await register(values);
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
					<Box padding={3}>
						<Form>
							<InputField
								label="Username"
								name="username"
								type="username"
							/>
							<InputField
								label="Email"
								name="email"
								type="email"
							/>
							<InputField
								label="Password"
								name="password"
								type="password"
							/>
							{renderRedirect()}
							<Center>
								<Button
									mt={2}
									type="submit"
									isLoading={isSubmitting ?? false}
									bg="#dddddd"
								>
									Submit
								</Button>
							</Center>
							{/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
						</Form>
					</Box>
				);
			}}
		</Formik>
	);
};

export { RegisterForm };
