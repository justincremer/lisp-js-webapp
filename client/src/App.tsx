import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Splash, Home, Editor, About } from './pages';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
};

const theme = extendTheme({ colors });

const App: React.FC = () => (
	<Router>
		<ChakraProvider theme={theme}>
			<Switch>
				<Route path="/" exact component={Splash} />
				<Route path="/home" component={Home} />
				<Route path="/editor" component={Editor} />
				<Route path="/about" component={About} />
			</Switch>
		</ChakraProvider>
	</Router>
);

export default App;
