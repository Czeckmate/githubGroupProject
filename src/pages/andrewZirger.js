export default function examplePage() {
    return (
        <div className='container'>
            <title>Website</title>
            <link rel='icon' href='/favicon.ico' />

            <main>
                <div className='underline'>
                    <h1 className='title'>Hello, I'm Andrew Zirger</h1>
                </div>
                <img
                    className='pic'
                    src='https://media-exp1.licdn.com/dms/image/C5603AQG1LBbtRh0bRA/profile-displayphoto-shrink_200_200/0/1662345234745?e=1669852800&v=beta&t=A8duTK1NjqtUCQ7AvRzdSXLlje3YzPjqRZEqoDfdBbQ'
                    alt='picture of me'
                />

                <p className='description'>
                    Hello, my name is Andrew, I am a freshman CS major at CU Boulder. This 
                    is a short about me page. I have lived in Boulder all my life. I have 
                    always enjoyed coding, and as such, Computer Science seemed like a natural 
                    field for me to go into. After taking CS courses in high school, this 
                    dicision seemed even more clear. I also hope to pursue a few minors in 
                    different areas of interest including, but not limited to, math, physics,
                    french, and quantum engineering.
                </p>

                <a className='button' href='/'>
                    <p> Back to the Home Page</p>
                </a>
            </main>

            <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

            <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
        </div>
    );
}