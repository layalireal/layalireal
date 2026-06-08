const apiUrl = import.meta.env.VITE_API_URL || '';

export default function App() {
  return (
    <main className="app">
      <h1>Layali Beauty</h1>
      <p>Welcome to Layali Beauty.</p>
      {apiUrl ? <p className="api-url">API: {apiUrl}</p> : null}
    </main>
  );
}
