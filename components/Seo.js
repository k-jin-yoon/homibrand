
import Head from 'next/head';

export default function Seo({title}){
    const currentTitle = `${title} | HOMI`;
    return (
        <Head>
            <title>{currentTitle}</title>
            <meta name="description" content="HOMI Korea" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content=" 호미 사이트에 오신 것을 환영합니다." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    )
}