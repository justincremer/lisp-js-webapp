import React from 'react';
import { Grid } from '@chakra-ui/react';
import {
	AdBlock,
	TitlePanel,
	Interpreter,
	FileExplorer,
	Navigator,
	ComponentGridItem,
} from './components';

const Editor = (): React.ReactElement => (
	<Grid
		templateRows="repeat(4, 1fr)"
		templateColumns="repeat(5, 1fr)"
		margin="0.5rem"
		gap="1rem"
	>
		<ComponentGridItem r={4} c={1} component={<FileExplorer />} />
		<ComponentGridItem r={1} c={3} component={<TitlePanel />} />
		<ComponentGridItem r={1} c={1} component={<Navigator />} />
		<ComponentGridItem r={3} c={3} component={<Interpreter />} />
		<ComponentGridItem r={3} c={1} component={<AdBlock />} />
	</Grid>
);

export default Editor;
