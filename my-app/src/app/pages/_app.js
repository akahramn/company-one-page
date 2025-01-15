import '../styles/globals.css'; // Global stil dosyanız (opsiyonel)
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}