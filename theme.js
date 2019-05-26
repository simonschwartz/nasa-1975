import React from 'react'
import { theme, ThemeConfig, DocPreview, Docs, Link } from 'docz'
import { ThemeProvider } from 'emotion-theming'
import WormLogo from './lib/components/WormLogo'

// import * as components from './new-components'

const Menu = () => (
    <Docs>
      {({ docs }) => (
        <ul>
          {docs.map(doc => (
            <li key={doc.id}>
              <Link to={doc.route}>
                {doc.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Docs>
  )

const Theme = () => (
    <ThemeConfig>
      {config => (
        <ThemeProvider theme={config}>
            <WormLogo width={150}/>
            <Menu />
            <div style={{maxWidth: "600px", margin: "auto"}}>
            <DocPreview />
            </div>
        </ThemeProvider>
      )}
    </ThemeConfig>
  )

const themeConfig = {
  colors: {
    primary: 'tomato',
    secondary: 'khaki',
    gray: 'lightslategray',
  },
}

export default theme(themeConfig)(Theme)