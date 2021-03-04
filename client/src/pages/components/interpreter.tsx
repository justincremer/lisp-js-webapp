/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useState } from 'react';
import { parse, interpret } from '../../shared/lisp-js/src/utils/interpreter';
import { Box, Center, Divider, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import {
	FormControl,
	FormHelperText,
	FormLabel,
} from '@chakra-ui/form-control';

const Interpreter = (): React.ReactElement => {
	const [expression, setExpression] = useState('');
	const [result, setResult] = useState('');

	const changeHandler = (event: any) => setExpression(event.target.value);

	const submissionHandler = (event: any) => {
		const result = interpret(parse(expression));

		event.preventDefault();
		setResult(result);
	};

	return (
		<Box>
			<Heading size="md" mb="5" textAlign="center">
				Interpreter
			</Heading>
			<Divider mb="5" />
			<FormControl>
				<FormLabel>Enter source code</FormLabel>
				<Center>
					<Input
						type="text"
						placeholder="source code"
						onChange={changeHandler}
					/>
					<Button onClick={submissionHandler}>Enter</Button>
				</Center>
				<FormHelperText textAlign="center">{result}</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default Interpreter;
