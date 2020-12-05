import Link from 'next/link';

import MaterialLink from '@material-ui/core/Link';

import HomeStyle from '../styles/index.styles';

export default function Home() {
    return (
        <div className="container">
            <main className="main">
                <HomeStyle />
                <h1 className="title">Ladderly</h1>

                <Link href="/login" passHref>
                    <MaterialLink color="secondary">Login</MaterialLink>
                </Link>

                <div className="grid">
                    <a href="https://nextjs.org/docs" className="card">
                        <h3>Land a Job 🔥</h3>
                        <p>Learn skills, get referrals, grow a network, and land a job.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className="card">
                        <h3>Accelerate</h3>
                        <p>Upskill, promote, and negotiate better career opportunities.</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
                        <h3>What Next?</h3>
                        <p>Manage wealth, scale influence, and organize a sustainable lifestyle.</p>
                    </a>

                    <a href="https://nextjs.org/docs" className="card">
                        <h3>Documentation</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className="card">
                        <h3>Learn</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
                        <h3>Examples</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className="card"
                    >
                        <h3>Deploy</h3>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </main>

            {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
         Ladderly
        </a>
      </footer> */}
        </div>
    );
}
