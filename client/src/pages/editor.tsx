import { GridWrapper } from './wrappers';
import {
	AdBlock,
	Interpreter,
	FileExplorer,
	ComponentGridItem,
} from './components';
import { Box, Center, Heading } from '@chakra-ui/react';

const Title = () => (
	<Center pt={10}>
		<Heading as="h1" size="4xl" margin="1rem">
			Editor page
		</Heading>
	</Center>
);

const Editor = (): JSX.Element => (
	<Box>
		<Title />
		<GridWrapper rows={4} columns={6}>
			<ComponentGridItem r={6} c={1} component={<FileExplorer />} />
			<ComponentGridItem r={6} c={4} component={<Interpreter />} />
			<ComponentGridItem r={6} c={1} component={<AdBlock />} />
		</GridWrapper>
	</Box>
);

export { Editor };
