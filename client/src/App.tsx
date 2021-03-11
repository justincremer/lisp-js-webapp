import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider, createClient } from 'urql';

import { ChakraProvider } from '@chakra-ui/react';

import { Splash, Home, Editor, About } from './pages';
import { theme } from './theme';

const client = createClient({
	url: 'http://localhost:3001/graphql',
	fetchOptions: {
		credentials: 'include',
	},
});

const App: React.FC = () => (
	<Router>
		<Provider value={client}>
			<ChakraProvider theme={theme}>
				<Switch>
					<Route path="/" exact component={Splash} />
					<Route path="/home" component={Home} />
					<Route path="/editor" component={Editor} />
					<Route path="/about" component={About} />
				</Switch>
			</ChakraProvider>
		</Provider>
	</Router>
);

export default App;
