import { App } from './App';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const AppComponent = (<App />);

root.render(AppComponent);
