import { App } from './App';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const AppComponent = (<App />);

root.render(AppComponent);
