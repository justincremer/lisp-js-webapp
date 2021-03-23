/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from 'react';
import { Text, Image, Box } from '@chakra-ui/react';
import { harry, tomato } from '../../shared/assets';

const boxShadow = 'dark-lg';

const Ad = (props: { image: string | any; content: string }) => {
	const { image, content } = props;

	return (
		<Box mt="1rem" shadow={boxShadow} borderRadius="sm">
			<Image src={image} />
			<Text padding="0.5rem" textAlign="center">
				{content}
			</Text>
		</Box>
	);
};

const AdBlock = (): React.ReactElement => {
	return (
		<Box>
			<Ad image={harry} content="Look at this thick boy :')" />
			<Ad
				image={tomato}
				content="Don't let tomatoes control your life. all: (123) 456-7890 for a
				free consoltation."
			/>
		</Box>
	);
};

export { AdBlock };
