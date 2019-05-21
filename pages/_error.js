import React from 'react'
import Category from '../src/components/category'

import Link from 'next/link'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : ''
    return { statusCode }
  }

  render() {
    return (
      <main className="a-home">
        <div className="a-home__content">
          <Category>Erreur {this.props.statusCode}</Category>
          <div>
            Une erreur est survenue.{' '}
            <Link href="/">
              <a>Retourner à l'accueil</a>
            </Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Error
