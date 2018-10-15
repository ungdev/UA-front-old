import React from 'react'
import Category from '../../components/category'
import Arrow from '../arrow'
import ScrollToTopOnMount from '../../../components/scrollToTopOnMount'

const HS = () => {
  return (<React.Fragment>
    <ScrollToTopOnMount/>
    <div style={{ marginTop: '40px', backgroundColor: '#202020' }}>
      <Category>Hearthstone</Category>
    </div>
    <div className="a-tournament-content">
      <p>Vous retrouverez sur cette page toutes les informations relatives aux tournoi Hearthstone. <strong>Attention</strong>, ces informations pourront évoluer,
      tenez vous informé via nos réseaux (<a href="https://www.facebook.com/UTTArena/">Facebook</a>/<a href="https://twitter.com/UTTArena">Twitter</a>).</p>
      <Category>Informations générales</Category>
      <p>L'inscription à l'UTT Arena est fixée à 15€ par joueur. La LAN se déroulera du Vendredi 7 Décembre 18h au Dimanche 9 Décembre à 18h <strong>sans interruption</strong>. 
      Les tournois commenceront le samedi à 10h. Sera mise à disposition une buvette, avec de la nourriture en continu et à prix réduit.</p>
      <Category>Tournoi Libre</Category>
      <p>En parallèle des tournois "Spotlights" (Lol, HS, CS:GO, Fortnite, SSBU) se déroulera un tournoi libre. Celui-ci sera composé de différents mini-tournois, sur des jeux divers et variés.
      <strong> Tout joueur de tournoi Spotlight éliminé rejoindra automatiquement le tournoi Libre.</strong> Il pourra ainsi profiter d'animations même s'il n'est plus dans la compétition.</p>
      <Category>Règlements</Category>
      <p>En participant à cette compétition, les joueurs acceptent, sans réticence ou interprétation, de respecter le règlement.
      Il est à noter que celui-ci est susceptible d’évoluer durant la LAN en fonction des besoins (retard, imprécision...). </p>
      <p>Par ailleurs, en cas de divergence d’interprétation de ce document, l’avis des administrateurs du tournoi a préséance sur celui des joueurs. Les joueurs doivent respecter les horaires
       donnés par les organisateurs et s’assurer d’être disponibles lorsqu’ils seront appelés avant le début du tournoi ainsi qu’à chaque fois que cela sera nécessaire, sous peine de disqualification. </p>
      <h2>Prérequis</h2>

      <p><strong> Les tournois commencent le samedi à 10h</strong>.</p>

      <h2>Règles générales du jeu</h2>

      <p><strong>Mode :</strong> standard</p>
      <p><strong>Format :</strong> conquest</p>
      <p><strong>ATTENTION :</strong> les extensions sortis 2 semaines avant le tournoi ne seront pas acceptés lors des matchs.</p>

      <h2>Déroulement d'un match</h2>

      <p><strong>Avant le match :</strong> si un joueur ne se présente pas dans le temps imparti, il sera considéré comme déclarant forfait.</p>
      <p><strong>Interruption du match :</strong> si un match est involontairement interrompu (plantage, déconnexion, réseau…), les joueurs sont invitées à recommencer la partie. En revanche, si
      un joueur possède des problèmes à répétition dûs à sa configuration, il pourra être disqualifié, à moins qu'il ne trouve du matériel de remplacement.</p>
      <p><strong>Retard :</strong> tout retard de plus de 20 minutes entraînera le forfait automatique d'une partie.</p>
      <h2>Format du tournoi (à venir)</h2>

      <h2>Règles de bonne conduite</h2>
      <p>Tous les participants sont invités à se comporter de façon respectueuse envers les autres participants. Un joueur peut être réprimandée et recevoir un avertissement si :</p>
      <ul>
        <li>Utilise un langage et des gestes insultants ;</li>
        <li>Est coupable d’actes violents ;</li>
        <li>Arrive en retard à l’heure de convocation ;</li>
        <li>Laisse intentionnellement un adversaire remporter le match.</li>
      </ul>

      <p>Un manquement à ces règles pourra entraîner <strong>un avertissement, la perte d'une partie ou d'un match ou encore la disqualification du joueur.</strong> </p>
      
      <h2>Finales sur scène</h2>
      <p>Cette année, les finalistes auront l'occasion de pouvoir jouer les finales sur la scène de l'événement, devant le public du festival.
      C'est une occasion unique de pouvoir montrer son skill devant tout le monde, mais quelques règles s'imposent.</p>
      <h3>Obligation</h3>
      <p>Jouer sur scène est <strong>obligatoire</strong>, tout refus entraînera la disqualification du joueur.</p>
      <h3>Matériel</h3>
      <p>Il vous sera mis à disposition sur scène du matériel dernière génération par notre partenaire <strong>Scoup Esport</strong> (clavier, souris, casque, tour, écran, chaise). 
      Seulement, nous sommes conscients que vous êtes habitués à utiliser votre matériel pour jouer.
      Ainsi, il vous sera possible d'emmener sur scène votre clavier et votre souris. Si vous souhaitez utiliser votre écran, pc ou tout autre matériel, il faudra que vous le fassiez 
      valider par le staff avant, et que cela ne mette pas le début du match en retard. N'hésitez pas à demander l'aide du staff <strong>à l'avance</strong>. Attention, <strong>
      pour le casque, il faudra qu'il soit anti-bruit et que le micro soit directionnel</strong>. Sinon vous devrez utiliser le casque que nous fournirons.</p>
      <p><strong>Tout retard de plus de 20 minutes dû à un joueur qui prendra trop de temps à s'installer entraînera le forfait automatique d'une partie.</strong></p>
    </div>
    <Arrow/>
  </React.Fragment>)
}


export default HS
