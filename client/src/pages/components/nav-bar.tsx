import { Box, Button, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Logo = (props: any): JSX.Element => (
	<Box {...props}>
		<Text fontSize="lg" fontWeight="bold">
			Logo
		</Text>
	</Box>
);

const CloseIcon = () => (
	<svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
		<title>Close</title>
		<path
			fill="white"
			d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
		/>
	</svg>
);

const MenuIcon = () => (
	<svg
		width="24px"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		fill="white"
	>
		<title>Menu</title>
		<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
	</svg>
);

const MenuToggle = (props: { toggle: any; isOpen: boolean }) => {
	const { toggle, isOpen } = props;
	return (
		<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <MenuIcon />}
		</Box>
	);
};

const MenuItem = (props: { to: string; children: any; [x: string]: any }) => {
	const { to, children, ...rest } = props;

	return (
		<Link href={to}>
			<Text display="block" {...rest}>
				{children}
			</Text>
		</Link>
	);
};

const MenuLinks = (props: { isOpen: boolean }) => {
	const { isOpen } = props;

	return (
		<Box
			display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
			flexBasis={{ base: '100%', md: 'auto' }}
		>
			<Stack
				spacing={8}
				align="center"
				justify={['center', 'space-between', 'flex-end', 'flex-end']}
				direction={['column', 'row', 'row', 'row']}
				pt={[4, 4, 0, 0]}
			>
				<MenuItem to="/">Home</MenuItem>
				<MenuItem to="/Editor">Editor</MenuItem>
				<MenuItem to="/About">About</MenuItem>
				<MenuItem to="/register" isLast>
					<Button
						size="sm"
						rounded="md"
						color={['teal.500', 'teal.500', 'white', 'white']}
						bg={['white', 'white', 'teal.500', 'teal.500']}
						_hover={{
							bg: [
								'teal.100',
								'teal.100',
								'teal.600',
								'teal.600',
							],
						}}
					>
						Create Account
					</Button>
				</MenuItem>
			</Stack>
		</Box>
	);
};

const NavBarContainer = (props: { children: any; [x: string]: any }) => {
	const { children, ...rest } = props;
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={8}
			p={8}
			bg={['teal.500', 'teal.500', 'transparent', 'transparent']}
			color={['white', 'white', 'teal.700', 'teal.700']}
			{...rest}
		>
			{children}
		</Flex>
	);
};

const NavBar = (props: any): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<NavBarContainer {...props}>
			<Logo color={['white', 'white', 'teal.500', 'teal.500']} />
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} />
		</NavBarContainer>
	);
};

export { NavBar };
