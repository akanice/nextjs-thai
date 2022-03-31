import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import '../styles/fontawesome.css';

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
