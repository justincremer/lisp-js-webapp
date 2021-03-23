import { Box } from '@chakra-ui/react';
import { NavBar } from '../components';

interface WrapperProps {}

const PageWrapper: React.FC<WrapperProps> = ({ children }) => {
	return (
		<Box w="100%">
			<NavBar bg="primary.100" />
			{children}
		</Box>
	);
};

export { PageWrapper };
