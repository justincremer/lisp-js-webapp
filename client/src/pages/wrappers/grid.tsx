import { Grid } from '@chakra-ui/react';

interface WrapperProps {}

const GridWrapper: React.FC<WrapperProps> = ({ children }) => {
	return (
		<Grid
			templateRows="repeat(4, 1fr)"
			templateColumns="repeat(5, 1fr)"
			gap="1rem"
		>
			{children}
		</Grid>
	);
};

export { GridWrapper };
