import React from 'react';
import { GridItem } from '@chakra-ui/react';

const ComponentGridItem = (props: {
	r: number;
	c: number;
	component?: React.ReactElement;
}): React.ReactElement => {
	const { r, c, component } = props;

	const boxShadow = 'dark-lg';
	const boxColor = '#ffffff';

	return (
		<GridItem
			rowSpan={r}
			colSpan={c}
			shadow={boxShadow}
			borderRadius="sm"
			padding="1rem"
			background={boxColor}
		>
			{component ?? null}
		</GridItem>
	);
};

export default ComponentGridItem;
