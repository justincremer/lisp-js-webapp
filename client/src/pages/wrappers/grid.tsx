import { Grid } from '@chakra-ui/react';

interface WrapperProps {
	rows: number;
	columns: number;
	children: any;
}

const GridWrapper: React.FC<WrapperProps> = (props) => {
	const { rows, columns, children } = props;

	return (
		<Grid
			templateRows={`repeat(${rows}, 1fr)`}
			templateColumns={`repeat(${columns}, 1fr)`}
			gap="1rem"
		>
			{children}
		</Grid>
	);
};

export { GridWrapper };
