import { Box, Text } from '@chakra-ui/react';
import { useGetCurrentUserQuery } from '../../../generated/graphql';

const CurrentUserForm = () => {
	const response = useGetCurrentUserQuery();

	return (
		<Box>
			<Text>{response[0].data?.getCurrentUser?.user?.email}</Text>
		</Box>
	);
};

export { CurrentUserForm };
