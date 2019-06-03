import React from 'react';
import Category from '../../src/components/category';

import './faq.css';
import HomeLayout from '../../src/layouts/homeLayout';

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      faqEntriesOpened: [],
    };
  }

  toggleFaqEntry(i) {
    const entries = this.state.faqEntriesOpened.slice();
    entries[i] = !entries[i];

    this.setState({
      faqEntriesOpened: entries,
    });
  }

  render() {
    const faqData = [
      {
        title: 'Général',
        entries: [
          {
            question: 'Quand commencent les tournois ?',
            answer: 'Tous les tournois commencent le samedi à 10h.',
          },
          {
            question: 'Puis-je jouer à la manette ?',
            answer: 'Oui.',
          },
          {
            question: 'Puis-je streamer pendant la LAN ?',
            answer:
              "Peut-être. Il faudra dans un premier temps se déclarer auprès des organisateurs. Ensuite, en fonction de l'état du réseau, tu pourras peut-être streamer.",
          },
          {
            question: 'Où puis-je trouver des joueurs pour mon équipe ?',
            answer:
              "Sur le discord de l'UTT Arena tu trouveras sûrement d'autres joueurs qui cherchent une équipe. Tu peux trouver le lien du discord en bas du site.",
          },
        ],
      },
      {
        title: 'Inscription',
        entries: [
          {
            question: 'Quelle place doivent acheter les coachs/managers de mon équipe ?',
            answer: "Les coachs et managers d'équipes doivent acheter une place visiteur.",
          },
          {
            question: 'Combien coûte la LAN pour les joueurs et les accompagnateurs ?',
            answer:
              'La LAN coûte 15€ pour tous les joueurs, avec une réduction de 5€ pour les écoles partenaires. La place accompagnateur/visiteur est à 6€.',
          },
          {
            question: "Je me suis inscrit et je n'ai pas reçu mon mail de confirmation",
            answer: (
              <span>
                Si lors de votre inscription votre adresse e-mail est rejetée, cela peut être dû à
                trois choses :
                <ul>
                  <li>On ne peut pas avoir plus d'un compte par mail</li>
                  <li>
                    Cet e-mail a été banni. Contactez les organisateurs afin d'en savoir plus.
                  </li>
                  <li>
                    Vous vous êtes trompé lors de la saisie de votre adresse mail. Contactez les
                    organisateurs grâce au formulaire de contact.
                  </li>
                </ul>
              </span>
            ),
          },
          {
            question: "Quel est l'âge minimum pour la LAN ?",
            answer: (
              <span>
                15 ans. Pour les mineurs, une autorisation parentale ou du responsable légal sera
                demandée le jour de la LAN.
                <br />
                <a href="https://drive.google.com/file/d/1w15X9dXEaqkEQjqLNkXL_OZhDC7SIs2V/view">
                  Vous pouvez la télécharger ici.
                </a>
              </span>
            ),
          },
        ],
      },
      {
        title: 'Paiement',
        entries: [
          {
            question: 'Puis-je payer en espèces ?',
            answer:
              'Il sera possible de payer en espèces sur place, mais à tes risques et périls, car il y a de fortes chances que toutes les places soient déjà parties.',
          },
          {
            question: 'Puis-je payer par PayPal ?',
            answer: 'Non, sur le site, seul le paiement par carte bancaire est disponible.',
          },
          {
            question: 'Est ce que je peux payer pour toute mon équipe ?',
            answer: 'Non, chacun doit payer sa place.',
          },
        ],
      },
      {
        title: 'Déroulement des tournois',
        entries: [
          {
            question: 'Puis-je jouer à Fortnite sur PS4 ?',
            answer: 'Non, seuls les PCs sont autorisés.',
          },
        ],
      },
      {
        title: 'Tournoi Super Smash Bros Ultimate',
        entries: [
          {
            question: 'Dois-je ramener ma console ?',
            answer: 'Non, nous fournissons tout le matériel.',
          },
          {
            question: 'Puis-je ramener mon PC ?',
            answer: "Non, vous n'aurez pas de place attribuée.",
          },
        ],
      },
    ];

    let id = 0;
    let titleId = 0;
    const faqContent = faqData.map(data => {
      const result = [
        <h3 className="a-faq__title" key={titleId++}>
          {data.title}
        </h3>,
      ];

      result.push(
        data.entries.map(entry => {
          id++;

          return (
            <div
              className={`faq-container${this.state.faqEntriesOpened[id] ? ' active' : ''}`}
              key={id}
            >
              <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, id)}>
                <span className="faq-arrow" />
                {entry.question}
              </span>
              <span className="faq-answer">{entry.answer}</span>
            </div>
          );
        })
      );

      return result;
    });

    return (
      <HomeLayout
        title="FAQ"
        url="/faq"
        description="Quand commencent les tournois ? Puis-je payer en espèces ? Quel est l'âge minimum pour la LAN ? Voici des questions de l'UTT Arena souvent posées, en espérant que cela pourra t'aider dans ta recherche jeune padawan !"
      >
        <main className="a-faq">
          <Category>FAQ</Category>
          <div className="a-faq__content">
            <div>
              <h3 style={{ fontWeight: 'normal' }}>
                Voici des questions souvent posées, en espérant que cela pourra t'aider dans ta
                recherche jeune padawan !
              </h3>

              {faqContent}
            </div>
          </div>
        </main>
      </HomeLayout>
    );
  }
}
