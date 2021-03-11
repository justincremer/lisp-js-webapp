import { Center, Heading } from '@chakra-ui/react';

import {
	PageWrapper,
	GridWrapper,
	RegisterForm,
	ComponentGridItem,
	Navigator,
} from '.';

const Title = () => (
	<Center>
		<Heading as="h1" size="4xl" margin="1rem">
			Home page
		</Heading>
	</Center>
);

const Home = (): JSX.Element => (
	<PageWrapper>
		<GridWrapper>
			<ComponentGridItem r={4} c={1} />
			<ComponentGridItem r={1} c={3} component={<Title />} />
			<ComponentGridItem r={1} c={1} component={<Navigator />} />
			<ComponentGridItem r={3} c={3} component={<RegisterForm />} />
			<ComponentGridItem r={3} c={1} />
		</GridWrapper>
	</PageWrapper>
);

export { Home };
