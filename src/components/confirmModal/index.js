import React from 'react';
import Modal from '../modal';

import './confirmModal.css';
import Button from '../button';

export default props => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div className="a-confirm-modal">
      <h1>Confirmation</h1>
      <div className="a-confirm-content">{props.message}</div>
      <div className="a-confirm-button-group">
        <Button onClick={props.onClose}>Annuler</Button>
        <Button raised onClick={props.onConfirm}>
          Valider
        </Button>
      </div>
    </div>
  </Modal>
);
