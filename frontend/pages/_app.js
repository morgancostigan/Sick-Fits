import Page from '../components/Page';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


//TODO swap with custom progress bar
import 'nprogress/nprogress.css';

export default function MyApp({ Component, pageProps}) {
    return (
        <Page>
            <Component {...pageProps}/>
        </Page>
    );
} 