import { Box } from '@chakra-ui/react';

interface WrapperProps {}

const PageWrapper: React.FC<WrapperProps> = ({ children }) => {
	return <Box w="100%">{children}</Box>;
};

export { PageWrapper };
