import Head from "next/head";
import Image from "next/image";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { css } from "../styled-system/css";
import { Analytics } from '@vercel/analytics/react';

const name = "RecepAi";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Recepai voor al uw recepten" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <div
            className={css({
              backgroundColor: "#e46358",
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              alignItems: "center",
              paddingLeft: "2em",
              paddingBottom: "1em",
              color: "#fff",
            })}
          >
            <Link href="/">
              <Image
                priority
                src="/images/recepai.png"
                height={108}
                width={108}
                alt={name}
              />
            </Link>

            <h2
              className={css({
                fontSize: "4xl",
                fontWeight: "bold",
                paddingTop: "1em",
              })}
            >
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </div>
        </>
      </header>
      <main className={css({ paddingLeft: "1em" })}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <Analytics />
    </div>
  );
}
