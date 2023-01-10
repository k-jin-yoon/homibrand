import Footer from '../components/Footer';
import Header from './../components/Header';
import styles from '../styles/Layout.module.css'

export default function Layout({ children }){
    return (
        <>
            <Header />
            <main  className={styles.main}>{children}</main>
            <Footer />
        </>
    );
}