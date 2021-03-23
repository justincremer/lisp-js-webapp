import { Center, Heading } from '@chakra-ui/react';

const Title = () => (
	<Center>
		<Heading as="h1" size="4xl" margin="1rem">
			About page
		</Heading>
	</Center>
);

const About = (): JSX.Element => <Title />;

export { About };
