import React from 'react';
import { Box, Center, Heading, SimpleGrid, Divider } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';

const NavButton = (props: { to: string; content: string }) => {
	const { to, content } = props;

	return (
		<Center>
			<Link to={'/' + (to ?? '')}>
				<Button size="md" pl="2rem" pr="2rem" fontSize="sm">
					{content}
				</Button>
			</Link>
		</Center>
	);
};

const Navigator = (): React.ReactElement => (
	<Box>
		<Heading size="md" mb="5" textAlign="center">
			Navigator
		</Heading>
		<Divider mb="5" />
		<SimpleGrid gap={'0.3rem'}>
			<NavButton content="Splash" to="" />
			<NavButton content="Home" to="home" />
			<NavButton content="Editor" to="editor" />
			<NavButton content="About" to="about" />
		</SimpleGrid>
	</Box>
);

export { Navigator };
