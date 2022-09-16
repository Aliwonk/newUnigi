import Head from 'next/head';
import { useSelector } from 'react-redux';
import styles from '../../styles/PrivacyPolicy.module.sass'


export default function Privacy() {
    const text = useSelector(state => state.language.text);


    function  ListRules(props) {
        const data = props.data;
        
        return data.map((value, index) => {
            return(
                <div
                    className={styles.rule}
                    key={index}
                >   
                    <h5>
                        {value.caption}
                    </h5>
                    <p>
                        {value.description}
                    </p>
                </div>
            )

        })
    };
    return(
        <>
            <Head>
                <title>
                    {text.head.title.privacyPolicy}
                </title>
            </Head>
            <div className={styles.privacyPolicy}>
                <h4 className={styles.caption}>
                    {text.privacyPolicy.caption}
                </h4>
                <div className={styles.listRules}>
                    <ListRules data={text.privacyPolicy.listRules} />
                </div>
            </div>
        </>
    )
};