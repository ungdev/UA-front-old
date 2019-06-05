import React from 'react'
import Button from '../button'
import Link from 'next/link'

import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="a_footer">
        <div>
          © UTT Net Group
          <Link href="/mentions-legales">
            <a>Mentions légales</a>
          </Link>
        </div>
        <div>
          <a href={`mailto:UTT%20Arena<${process.env.REACT_APP_CONTACT_MAIL}>`}>
            {process.env.REACT_APP_CONTACT_MAIL}
          </a>
        </div>
        <div>
          <a href={`tel:${process.env.REACT_APP_CONTACT_PHONE}`}>
            {process.env.REACT_APP_CONTACT_PHONE}
          </a>
        </div>
        <div style={{ marginTop: '5px' }}>
          <Button raised={true} onClick={this.props.openContactModal}>
            Nous contacter
          </Button>
        </div>
      </div>
    )
  }
}

export default Footer
