import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider, createClient } from 'urql';

import { ChakraProvider } from '@chakra-ui/react';

import { Splash, Home, Editor, About, Register, Login, Logout } from './pages';
import { theme } from './theme';
import { PageWrapper } from './pages/wrappers';

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
				<PageWrapper>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/splash" component={Splash} />
						<Route path="/editor" component={Editor} />
						<Route path="/about" component={About} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/logout" component={Logout} />
					</Switch>
				</PageWrapper>
			</ChakraProvider>
		</Provider>
	</Router>
);

export default App;
