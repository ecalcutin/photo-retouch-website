import { createRoot } from 'react-dom/client'

const App = () => {
    return <div>App</div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
