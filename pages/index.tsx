import { GetStaticProps } from "next";
import Link from "next/link";
import htmlize from "../src/htmlize";
import Layout from "../src/Layout";
import styles from "../styles/index.module.css";

interface HomeProps {
  html: string;
}
export default function Home({ html }: HomeProps) {
  return <Layout
    title="SHoCoS | ANR-22-CE40-0008"
    description="Structure and Homotopy of Configuration Spaces (SHoCoS), a project funded by the Agence Nationale de la Recherche (ANR-22-CE40-0008)."
  >
    <nav className={styles["navbar"]}>
      <Link href="#public-abstract">Abstract</Link>
      <Link href="#members">Members</Link>
      <Link href="#events">Events</Link>
      <Link href="#position">Postdoc</Link>
      <Link href="#publications">Publications</Link>
    </nav>

    <div className={styles["index"]}
      dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>;
}

export const getStaticProps: GetStaticProps<HomeProps, {}> = () => ({
  props: {
    html: htmlize("index.md"),
  },
});
