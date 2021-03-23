import React, { useState } from 'react';
import { Box, Heading, Divider } from '@chakra-ui/react';

const File = (props: { name: string }) => <Box>{props.name}</Box>;

const Folder = (props: {
	name: string;
	children: Array<React.ReactElement> | React.ReactElement;
}) => {
	const { name, children } = props;
	const [isOpen, setIsOpen] = useState(false);

	const clickHandler = () => setIsOpen(!isOpen);

	return (
		<Box cursor="pointer">
			<span onClick={clickHandler}>
				<i className="folder icon" />
				{isOpen ? (
					<i className="caret down icon" />
				) : (
					<i className="caret right icon" />
				)}

				{name}
			</span>
			<Box ml="1rem">{isOpen ? children : null}</Box>
		</Box>
	);
};

const FileExplorer = (): React.ReactElement => (
	<Box>
		<Heading size="md" mb="5" textAlign="center">
			File Explorer
		</Heading>
		<Divider mb="5" />
		<Folder name="root">
			<Folder name="home">
				<Folder name="dev">
					<File name="main.ljs" />
				</Folder>
				<File name="test.txt" />
			</Folder>
			<Folder name="logs">
				<File name="log1.txt" />
				<File name="log2.txt" />
				<File name="log3.txt" />
			</Folder>
		</Folder>
	</Box>
);

export { FileExplorer };
