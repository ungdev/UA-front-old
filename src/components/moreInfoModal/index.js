import React from 'react';

import './moreInfoModal.css';

import Modal from '../modal';

export const StreamingPCModal = props => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div className="a-info-modal">
      <div className="a-info-modal-title">PC STREAMING</div>
      <div className="a-info-modal-body">
        - Boitier ANTEC P8 <br />
        - Carte graphique GTX 1080
        <br />
        - Carte mère Z170 Serie
        <br />
        - Alimentation 650W Gold
        <br />
        - Watercooling 120
        <br />
        - Processeur Intel core I7 6700K (3.6 GHz)
        <br />
        - SSD 250 Go
        <br />
        - Disque dur 1 To
        <br />
        - RAM 16 Go DDR 4<br />- Windows 10 Professionnel
      </div>
    </div>
  </Modal>
);

export const GamingPCModal = props => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div className="a-info-modal">
      <div className="a-info-modal-title">PC Gaming</div>
      <div className="a-info-modal-body">
        - Boitier ANTEC P7
        <br />
        - Carte graphique GTX 1050Ti 4 Gb
        <br />
        - Carte mère Z170 Serie
        <br />
        - Alimentation 430W
        <br />
        - Watercooling 120
        <br />
        - Processeur Intel core I5 7100 (3.6 GHz)
        <br />
        - SSD 120 Go
        <br />
        - Disque dur 1 To
        <br />
        - RAM 8 Go DDR 4<br />- Windows 10 Professionnel
      </div>
    </div>
  </Modal>
);

export const LaptopModal = props => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div className="a-info-modal">
      <div className="a-info-modal-title">PC PORTABLE MSI</div>
      <div className="a-info-modal-body">
        - CPU i7
        <br />
        - Ram 32go
        <br />
        - GTX 1060
        <br />
        - Écran 17’’
        <br />- Windows 10 Professionnel
      </div>
    </div>
  </Modal>
);
