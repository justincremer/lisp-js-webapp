import { Center, Heading } from '@chakra-ui/react';

const Title = () => (
	<Center pt={10}>
		<Heading as="h1" size="4xl" margin="1rem">
			Home page
		</Heading>
	</Center>
);

const Home = (): JSX.Element => <Title />;

export { Home };
