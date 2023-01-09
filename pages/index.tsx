import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Serverless Manifesto</title>
        <meta name='description' content='A Serverless Manifesto' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1 className={styles.siteHeaderText}>Serverless Manifesto</h1>
          <h2 className={styles.subHeaderText}>
            { /* eslint-disable-next-line react/no-unescaped-entities */ }
            ❓ What's a Serverless Manifesto?
          </h2>
          <div className={styles.intro}>
            <p>
              A serverless manifesto is a set of guiding principles that can
              help organizations design and develop applications using
              serverless computing in a way that is consistent, efficient, and
              effective. There are several reasons why a serverless manifesto
              might be needed:
            </p>
            <ul className={styles.list}>
              <li>
                Serverless architectures are a relatively new and rapidly
                evolving area of technology, and it can be helpful to have a set
                of guiding principles to help ensure that applications are built
                in a consistent and coherent manner.
              </li>

              <li>
                Serverless architectures involve a shift in the way that
                applications are designed and developed, and a manifesto can
                help organizations navigate this transition by providing a clear
                set of guidelines and best practices.
              </li>

              <li>
                A serverless manifesto can help organizations make informed
                decisions about how to best use serverless technologies in their
                specific context.
              </li>

              <li>
                A serverless manifesto can serve as a reference for developers,
                architects, and other stakeholders, helping them understand the
                core principles and values that should guide the development of
                serverless applications.
              </li>

              <li>
                A serverless manifesto can help organizations communicate the
                benefits and value of serverless computing to stakeholders, such
                as executives and customers.
              </li>
            </ul>
          </div>
          <div className={styles.manifesto}>
            <h2 className={styles.subHeaderText}>📜 Serverless Manifesto</h2>

            <ol className={styles.list}>
              <li className={styles.card}>
                <span className={styles.bold}> Embrace automation:</span>{' '}
                Serverless architectures rely on automation to handle the
                underlying infrastructure, allowing developers to focus on
                building and delivering business value.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>Design for resilience:</span>{' '}
                Serverless architectures can be inherently resilient due to
                their ability to automatically scale and recover from failures.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>
                  Leverage event-driven computing:
                </span>{' '}
                Serverless architectures are built around the concept of
                event-driven computing, where functions are triggered by
                specific events or inputs.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>Pay for value:</span> With
                serverless computing, you only pay for the compute resources you
                use, allowing you to optimize your costs based on actual usage.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>Build for scale:</span> Serverless
                architectures are designed to automatically scale to meet
                demand, making them well-suited for applications with
                unpredictable or variable workloads.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>Embrace modularity:</span>{' '}
                Serverless architectures encourage a modular,
                microservices-based approach to building applications, which can
                improve maintainability and scalability.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>Prioritize security:</span>{' '}
                Serverless architectures can offer improved security due to the
                abstraction of the underlying infrastructure, but it is
                important to properly secure the functions and data being
                processed.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>Foster collaboration:</span>{' '}
                Serverless architectures enable developers to build and deploy
                code quickly and easily, fostering collaboration and enabling
                the creation of applications at a faster pace.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>
                  Embrace continuous delivery:
                </span>{' '}
                With serverless architectures, it is easier to implement
                continuous delivery and deployment practices, allowing you to
                quickly and safely deliver new features and functionality to
                your users.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>Focus on the customer:</span> The
                flexibility and scalability of serverless architectures allows
                you to focus on delivering value to your customers, rather than
                managing infrastructure.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>
                  Embrace the power of the cloud:
                </span>{' '}
                Serverless computing allows you to leverage the power and
                capabilities of the cloud, making it easier to build and run
                applications at scale.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>Use managed services:</span>{' '}
                Serverless architectures often make use of managed services,
                which can improve the efficiency and reliability of your
                application.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>
                  Monitor and optimize performance:
                </span>{' '}
                It is important to monitor the performance of your serverless
                applications and optimize them for cost and efficiency.
              </li>

              <li className={styles.card}>
                <span className={styles.bold}>
                  Continuously learn and improve:
                </span>{' '}
                The dynamic nature of serverless architectures means that you
                should be continuously learning and improving your skills and
                practices to take full advantage of the benefits they offer.
              </li>
            </ol>
          </div>
        </div>
        <footer>
          Made by{' '}
          <a href='https://sebastianbille.com/'>
            <span>Sebastian Bille</span>
          </a>
        </footer>
      </main>
    </>
  );
}
