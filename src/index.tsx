import { createRoot } from 'react-dom/client';

const el = document.getElementById('root')
if (!el) throw new Error('root not found')
const root = createRoot(el)
root.render(<h1>Hello, world</h1>)