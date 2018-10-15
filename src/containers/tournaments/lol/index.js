import React from 'react'
import Category from '../../components/category'
import Arrow from '../arrow'
import ScrollToTopOnMount from '../../../components/scrollToTopOnMount'

const LOL = () => {
  return (<React.Fragment>
    <ScrollToTopOnMount/>
    <Arrow/>
    <div style={{ marginTop: '40px', backgroundColor: '#202020' }}>
      <Category>League of Legends</Category>
    </div>
    <div className="a-tournament-content">
      <p>Vous retrouverez sur cette page toutes les informations relatives aux tournois League of Legends, pro et amateur. <strong>Attention, ces informations pourront évoluer,
      tenez vous informé via nos réseaux (Facebook/Twitter)</strong>.</p>
      <Category>Règlements</Category>
      <h2>Prérequis</h2>

      <p>Le tournoi est organisé sur les serveurs officiels de <strong>l’Europe de l’Ouest.</strong>  Les participants doivent donc disposer d’un compte d’invocateur et d’un client du jeu à jour pour pouvoir participer à l’évènement.
      <strong> Les tournois commencent le samedi à 10h</strong>.</p>

      <h2>Règles générales du jeu</h2>

      <p><strong>Mode :</strong> Partie personnalisée « Tournament Draft Mode »</p>
      <p><strong>Map :</strong> Faille de l'invocateur (5c5)</p>
      <p><strong>Sélection des champions :</strong> Avant le début du match, une équipe sera tirée au sort. L’équipe en question, se retrouvera à gauche lors de la constitution du match. Les Bans et les picks devront respecter la procédure de draft habituelle.</p>
      <p><strong>ATTENTION :</strong> Les champions sortis 2 semaines avant le tournoi ne seront pas acceptés lors des matchs. Les équipes n’auront pas besoin de ban le ou les champions récemment sortis mais ne pourront pas le/les jouer.</p>

      <h2>Déroulement d'un match</h2>

      <p><strong>Avant le match :</strong> Si une équipe ne se présente pas dans le temps imparti, elle sera considérée comme perdante.</p>
      <p><strong>Capitaine :</strong> Pour créer une équipe sur le site, un joueur doit jouer le rôle de capitaine d'équipe, et les autres joueurs rejoindront son équipe. Ce capitaine 
      le restera pendant toute la durée du tournoi, et sera donc le référent de l'équipe. Pour plus de simplicité, il est demandé à ce que ce soit majoritairement le capitaine qui rentre en relation avec
      le staff (en cas de problème, questions diverses etc). Le capitaine d’équipe sera donc la personne en charge de son équipe pendant le tournoi, 
      il se chargera de la communication au sein de son équipe et devra reporter le résultat du match auprès des officiels du tournoi.</p>
      <p><strong>Interruption du match :</strong> Si un match est involontairement interrompu (plantage, déconnexion, réseau, …), les équipes sont invitées à « pauser » la partie. En revanche, si
      un joueur possède des problèmes à répétition dû à sa configuration, il pourra être disqualifié. Son équipe devra alors chercher un remplaçant (parmi des joueurs du tournoi libre) ou abandonner. Sauf s'il trouve du matériel de remplacement.</p>
      <p><strong>Retard :</strong> Tout retard de plus de 20 minutes entraînera la perte automatique d'une partie.</p>
      <h2>Format du tournoi (à venir)</h2>

      <h2>Règles de bonne conduite</h2>
      <p>Tous les participants sont invités à se comporter de façon respectueuse envers les autres participants. Une équipe peut être réprimandée et recevoir un avertissement si un de ses joueurs :</p>
      <ul>
        <li>Utilise un langage et des gestes insultants</li>
        <li>Est coupable d’actes violents</li>
        <li>Arrive en retard à l’heure de convocation</li>
        <li>Laisse intentionnellement un adversaire remporter le match.</li>
      </ul>

      <p>Un manquement à ces règles pourra entraîner <strong>un avertissement, la perte d'une partie ou d'un match ou encore la disqualification de l’équipe.</strong> </p>
      
      <h2>Finales sur scène</h2>
      <p>Cette année les finalistes auront l'occasion de pouvoir jouer les finales sur la scène de l'événement, devant le publique du festival.
      C'est une occasion unique de pouvoir montrer son skill devant tous le monde, mais quelques règles s'imposent.</p>
      <h3>Obligation</h3>
      <p>Jouer sur scène est <strong>obligatoire</strong>, tout refus entraînera la disqualification de l'équipe.</p>
      <h3>Matériel</h3>
      <p>Il vous sera mis à disposition sur scène du matériel dernière génération par notre partenaire <strong>Scoup Esport</strong> (clavier, souris, casque, tour, écran, chaise). 
      Seulement nous sommes conscient que vous êtes habitués à utiliser votre matériel pour jouer. 
      Ainsi, il vous sera possible d'emmener sur scène votre clavier et votre souris. Si vous souhaitez utiliser votre écran, pc ou tout autre matériel, il faudra que vous le fassiez 
      valider par le staff avant, et que cela ne mette pas le début du matche en retard. N'hésitez pas à demander l'aide du staff <strong>à l'avance</strong>. Attention, <strong>
      pour le casque, il faudra qu'il soit anti-bruit et que le micro soit directif</strong>. Sinon vous devrez utiliser le casque que nous fournirons.</p>
      <p><strong>Tout retard de plus de 20 minutes dû à un joueur qui prendra trop de temps à s'installer entraînera la perte automatique d'une partie.</strong></p>
      <h3>Configuration</h3>
      <p>La configuration du client League of Legends est stocké sur le serveur de Riot Games, vous n'aurez donc pas à reconfigurer le PC. en revanche, si vous aviez quand même 
      des changements à faire sur le PC, merci de le prendre en compte lors de l'installation, afin de ne pas mettre en retard votre équipe.</p>
    </div>
  </React.Fragment>)
}


export default LOL
