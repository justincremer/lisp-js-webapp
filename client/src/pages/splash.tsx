import React from 'react';

import { Center, Heading } from '@chakra-ui/react';

import { ComponentGridItem, Navigator } from './components';
import { PageWrapper, GridWrapper } from './wrappers';
import { CurrentUserForm } from './forms';

const Title = () => (
	<Center>
		<Heading as="h1" size="4xl" margin="1rem">
			Splash page
		</Heading>
	</Center>
);

const Splash = (): React.ReactElement => (
	<PageWrapper>
		<GridWrapper>
			<ComponentGridItem r={4} c={1} />
			<ComponentGridItem r={1} c={3} component={<Title />} />
			<ComponentGridItem r={1} c={1} component={<Navigator />} />
			<ComponentGridItem r={3} c={3} component={<CurrentUserForm />} />
			<ComponentGridItem r={3} c={1} />
		</GridWrapper>
	</PageWrapper>
);

export { Splash };
