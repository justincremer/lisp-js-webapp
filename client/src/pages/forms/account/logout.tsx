import { Button } from '@chakra-ui/button';
import { Container, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';

const LogoutForm = (): JSX.Element => (
	<Container display="block" background="tomato">
		<Box
			min-height="100%"
			display="flex"
			align-items="center"
			justifyContent="center"
		>
			<Text>You sure?</Text>
			<Button backgroundColor="tomato">Confirm</Button>
		</Box>
	</Container>
);

export { LogoutForm };
