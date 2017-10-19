import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default history;

/**
 * We can use the `history` library to create an interface
 * to our browser's session history. We can use this to configure
 * our Router component, so that to use the history elsewhere, we don't
 * have to pass it as a prop - we can simply import it from this file.
 */
