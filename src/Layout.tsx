import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    location: string;
}
export default function Layout({ title, description, location, children }: LayoutProps) {
    return <div className={styles["box"]}>
        <Head>
            <meta charSet="utf-8" />
            <link rel="canonical" href={`https://shocos.idrissi.eu/${location}`} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="author" href="Najib Idrissi" />
            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="icon" type="image/webp" href="/icon/icon-32.webp" />
        </Head>

        <nav className={styles["navbar"]}>
            <Link href="/">Home</Link>
            <Link href="/#members">Members</Link>
            <Link href="/#events">Events</Link>
            <Link href="/#postdoctoral-position">Postdoc</Link>
            <Link href="/#publications">Publications</Link>
        </nav>

        <main>
            {children}
        </main>

        <footer>
            <div><Link href="/">SHoCoS</Link></div>
            <div>Contact: <a href="https://idrissi.eu">Najib Idrissi</a></div>
            <div><a href="https://anr.fr"><img src="/logos/anr.svg" alt="Funded by the ANR" data-bg /></a></div>
            <div><a href="https://u-paris.fr"><img src="/logos/upc.svg" alt="Hosted at Université Paris Cité" /></a></div>
            <div><a href="https://www.cnrs.fr"><img src="/logos/cnrs.svg" alt="Managed by the CNRS" /></a></div>
        </footer>
    </div>;
}
