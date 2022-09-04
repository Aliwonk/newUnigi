import Head from 'next/head';
import { useSelector } from 'react-redux';
import PrivacyPolicy from "../../components/PrivacyPolicy";


export default function Privacy() {
    const text = useSelector(state => state.language.text);

    return(
        <>
            <Head>
                <title>
                    {text.head.title.privacyPolicy}
                </title>
            </Head>
            <PrivacyPolicy />
        </>
    )
};