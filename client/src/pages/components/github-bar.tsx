import React from 'react';
import { Center, Image, Link } from '@chakra-ui/react';

const GithubBar = (): React.ReactElement => (
	<Center>
		<Link href="http://unlicense.org/">
			<Image
				src="https://img.shields.io/badge/license-Unlicense-blue.svg"
				alt="License:Unlicense"
				pr="1"
			/>
		</Link>
		<Link href="https://github.com/justincremer/lisp.js/issues">
			<Image
				src="https://img.shields.io/github/issues/justincremer/lisp.js"
				alt="Issues"
				pr="1"
			/>
		</Link>
		<Link href="https://github.com/justincremer/lisp.js/fork">
			<Image
				src="https://img.shields.io/github/forks/justincremer/lisp.js"
				alt="Forks"
				pr="1"
			/>
		</Link>
		<Link href="https://github.com/justincremer/lisp.js/stargazers">
			<Image
				src="https://img.shields.io/github/stars/justincremer/lisp.js"
				alt="Stars"
				pr="1"
			/>
		</Link>
	</Center>
);

export default GithubBar;
