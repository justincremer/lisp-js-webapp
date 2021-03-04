/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from 'react';
import { GithubBar } from '.';
import { jsLogo, lispLogo } from '../../shared/assets';
import {
	Heading,
	Link,
	Text,
	Box,
	Center,
	Image,
	Grid,
	GridItem,
} from '@chakra-ui/react';

const TitlePanel = (): React.ReactElement => (
	<Box>
		<Grid
			templateRows="repeat(1, 1fr)"
			templateColumns="repeat(5, 1fr)"
			margin="1rem"
			gap="1rem"
		>
			<GridItem colSpan={1} alignSelf="center">
				<Center>
					<Image src={lispLogo} inlineSize="100%" />
				</Center>
			</GridItem>
			<GridItem colSpan={3}>
				<Heading as="h1" size="4xl" mb="8" textAlign="center">
					Lisp-js
				</Heading>
				<Link href="https://github.com/justincremer/lisp-js">
					<Text as="h6" size="md" mb="2" textAlign="center">
						A simple lisp interpreter
					</Text>
					<Text as="h6" size="md" mb="5" textAlign="center">
						by: Justin Cremer
					</Text>
				</Link>
			</GridItem>
			<GridItem colSpan={1} alignSelf="center" inlineSize="90%">
				<Center>
					<Image src={jsLogo} />
				</Center>
			</GridItem>
		</Grid>
		<GithubBar />
	</Box>
);

export default TitlePanel;
