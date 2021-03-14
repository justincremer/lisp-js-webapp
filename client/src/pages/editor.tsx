import React from 'react';

import { PageWrapper, GridWrapper } from './wrappers';
import {
	AdBlock,
	TitlePanel,
	Interpreter,
	FileExplorer,
	Navigator,
	ComponentGridItem,
} from './components';

const Editor = (): JSX.Element => (
	<PageWrapper>
		<GridWrapper>
			<ComponentGridItem r={4} c={1} component={<FileExplorer />} />
			<ComponentGridItem r={1} c={3} component={<TitlePanel />} />
			<ComponentGridItem r={1} c={1} component={<Navigator />} />
			<ComponentGridItem r={3} c={3} component={<Interpreter />} />
			<ComponentGridItem r={3} c={1} component={<AdBlock />} />
		</GridWrapper>
	</PageWrapper>
);

export { Editor };
