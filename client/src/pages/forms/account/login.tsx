import { useState } from 'react';
import { Redirect } from 'react-router';

import { Box, Button, Center } from '@chakra-ui/react';
import { Formik, Form } from 'formik';

import { useAuthenticateMutation } from '../../../generated/graphql';
import { toErrorMap } from '../../../utils';
import { InputField } from './input-field';

const LoginForm = (): JSX.Element => {
	const [, authenticate] = useAuthenticateMutation();
	const [redirect, setRedirect] = useState(false);
	const renderRedirect = () => (redirect ? <Redirect to="/" /> : null);

	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			onSubmit={async (values, { setErrors }) => {
				const { username, password } = values;
				const params = {
					email: '',
					username: username,
					password: password,
				};

				const response = await authenticate(params);
				const {
					status,
					user,
					errors,
				} = response.data?.authenticateUser!;

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
								label="username"
								name="email or username"
								type="username"
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

export { LoginForm };
