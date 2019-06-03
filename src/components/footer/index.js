import React from 'react';
import Link from 'next/link';
import Button from '../button';

class Footer extends React.Component {
  render() {
    return (
      <div className="a-home__content a-home__footer">
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
          <Button raised onClick={this.props.openContactModal}>
            Nous contacter
          </Button>
        </div>
      </div>
    );
  }
}

export default Footer;
