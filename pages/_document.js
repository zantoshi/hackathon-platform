import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Favicon por defecto */}
          <link rel="icon" href="/favicon.svg" id="favicon" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const favicon = document.getElementById('favicon');

                function updateFavicon() {
                  if (darkModeMediaQuery.matches) {
                    favicon.href = '/favicon-dark.svg';
                  } else {
                    favicon.href = '/favicon-light.svg';
                  }
                }

                darkModeMediaQuery.addEventListener('change', updateFavicon);

                updateFavicon(); // Llama a la función al cargar la página para establecer el favicon inicial
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
