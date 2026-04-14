import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ArrowLeft, FileText } from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-[#143028] dark:text-white mb-4 flex items-center gap-2">
      <span className="w-1 h-6 bg-[#DAFFD1] rounded-full inline-block" />
      {title}
    </h2>
    <div className="space-y-3 text-[#143028]/80 dark:text-white/70 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

const CGU: React.FC = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language && i18n.language.startsWith('en');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFAF7] dark:bg-[#0A1A14]">
      <PublicNavbar />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 pt-32 pb-12 md:pt-40 md:pb-16">
        {/* Title block */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DAFFD1] text-[#143028] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            {isEn ? "Legal Document" : "Document légal"}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#143028] dark:text-white mb-3">
            {isEn ? "Terms of Use" : "Conditions Générales d'Utilisation"}
          </h1>
          <p className="text-[#143028]/50 dark:text-white/40 text-sm">
            {isEn ? "Last updated: April 14, 2026 &nbsp;·&nbsp; Version 1.0" : "Dernière mise à jour : 14 avril 2026 &nbsp;·&nbsp; Version 1.0"}
          </p>
        </div>

        
        {isEn ? (

        <div className="bg-white dark:bg-[#143028]/20 rounded-2xl border border-[#143028]/8 dark:border-white/8 p-6 md:p-10">

          <Section title="1. Overview">
            <p>
              Faymaco is a SaaS platform published by Fayko, allowing African businesses and
              professionals to automate the sending of payment requests, reminders, and
              confirmations via WhatsApp, integrating with mobile payment services such as Wave,
              Orange Money, and Free Money.
            </p>
            <p>
              Access and use of Faymaco implies full acceptance of these
              Terms of Use (TOU). Any use contrary to these TOU will result in
              the termination of the user's account.
            </p>
          </Section>

          <Section title="2. Definitions">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>"Platform"</strong>: the Faymaco software accessible via the website and/or APIs.</li>
              <li><strong>"User"</strong>: any natural or legal person who has created an account on the Platform.</li>
              <li><strong>"End Customer"</strong>: the recipient of WhatsApp messages sent by the User via the Platform.</li>
              <li><strong>"Message"</strong>: any WhatsApp message sent from the Platform to an End Customer.</li>
              <li><strong>"Subscription"</strong>: the pricing plan subscribed to by the User (Free, Pro, Business, etc.).</li>
              <li><strong>"Data"</strong>: all information entered or imported by the User on the Platform.</li>
            </ul>
          </Section>

          <Section title="3. Access to the Service and Account Creation">
            <p>
              To access Faymaco, the User must create an account by providing accurate,
              complete, and up-to-date information: full name, valid professional email address, active WhatsApp number, and
              data related to their activity.
            </p>
            <p>
              The User is solely responsible for the confidentiality of their login credentials. Any
              access to the Platform using their credentials is presumed to be made by the User. In case
              of loss or compromise, the User must immediately contact the Faymaco team at
              <a href="mailto:support@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">support@peelo.chat</a>.
            </p>
            <p>
              Access is reserved for adults (18 years or older) with the legal capacity
              to conclude contracts in their country of residence.
            </p>
          </Section>

          <Section title="4. Description of Features">
            <p>The Platform offers the following features depending on the subscribed plan:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Creation and sending of payment requests via WhatsApp</li>
              <li>Management of automated reminders for late payments</li>
              <li>Management of subscriptions and recurring payments</li>
              <li>Automatic generation of PDF invoices</li>
              <li>Bulk import of customers via Excel file</li>
              <li>Dashboard for tracking payments and customers</li>
              <li>Integration with mobile payment APIs (Wave, Orange Money, Free Money)</li>
            </ul>
            <p className="mt-2">
              Fayko reserves the right to modify, add, or remove features at any time,
              provided the Users are informed with reasonable notice.
            </p>
          </Section>

          <Section title="5. Pricing Plans and Billing">
            <p>
              Faymaco offers several pricing plans (Free, Pro, Business, Enterprise), the details of which are
              available on the Platform's Pricing page. Prices are expressed in CFA Francs (XOF) or
              in the applicable currency for the User's country.
            </p>
            <p>
              The Free plan is subject to lifetime quotas that are not renewed monthly. Paid plans
              benefit from a monthly reset of quotas on the 1st of each month.
            </p>
            <p>
              All paid Subscriptions are billed in advance for the chosen period (monthly or annually).
              Payments are non-refundable except where legally required or with the express agreement of
              the Faymaco team.
            </p>
            <p>
              In case of non-payment on the due date, Fayko reserves the right to suspend or terminate access
              to the Platform after a formal notice remains unheeded for 7 days.
            </p>
          </Section>

          <Section title="6. User Obligations">
            <p>The User agrees to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                Send WhatsApp messages only to individuals who have given their prior consent
                to receive commercial or billing communications.
              </li>
              <li>
                Comply with applicable regulations on personal data protection,
                particularly the laws in force in their country of operation.
              </li>
              <li>
                Not use the Platform for unlawful, fraudulent, or public order-violating purposes
                (spam, phishing, financial fraud, harassment, etc.).
              </li>
              <li>
                Not attempt to bypass the technical limitations or quotas of the Platform.
              </li>
              <li>
                Keep their account information up to date and notify any significant change
                regarding their activity.
              </li>
              <li>
                Ensure that the amounts indicated in the payment requests correspond to services
                or goods actually provided.
              </li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The Faymaco Platform, its source code, interfaces, trademarks, logos, and all
              content published therein are the exclusive property of Fayko and are protected by
              intellectual property laws.
            </p>
            <p>
              The User is granted a personal, non-exclusive, non-transferable,
              and revocable license to use the Platform for the duration of their Subscription, within the scope of their
              own professional activities.
            </p>
            <p>
              Any reproduction, representation, modification, publication, or adaptation, in whole or in part,
              of the Platform or its components is strictly prohibited without the prior written consent of
              Fayko.
            </p>
          </Section>

          <Section title="8. Availability and Maintenance">
            <p>
              Fayko commits to making its best efforts to ensure the availability of the Platform
              24/7. However, interruptions may occur for maintenance,
              updates, or technical issues beyond Fayko's control.
            </p>
            <p>
              Scheduled maintenance is announced at least 24 hours in advance by email and/or
              via the Platform. Emergency maintenance may occur without prior notice.
            </p>
            <p>
              Fayko cannot be held liable for service interruptions caused by third parties
              (telecom operators, Meta/WhatsApp, mobile payment providers, hosting services) or by
              force majeure events.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              The Faymaco Platform is an automated communication tool. Fayko is not a party
              to the financial transactions between the User and their End Customers, and cannot be held
              liable for:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Uncollected amounts or commercial disputes between the User and their customers.</li>
              <li>Messages not delivered for reasons attributable to WhatsApp or the telecom operator.</li>
              <li>Data loss resulting from improper use of the Platform.</li>
              <li>Any indirect, consequential, special, or punitive damages resulting from the use or
              inability to use the Platform.</li>
            </ul>
            <p className="mt-3">
              The total liability of Fayko shall in no event exceed the amount of the sums
              actually paid by the User during the three (3) months preceding
              the event giving rise to liability.
            </p>
          </Section>

          <Section title="10. Protection of Personal Data">
            <p>
              Fayko collects and processes personal data as part of providing the service.
              These processes are described in the{' '}
              <Link to="/politique-confidentialite" className="text-[#143028] dark:text-[#DAFFD1] underline font-medium">
                Privacy Policy
              </Link>{' '}
              of Faymaco, which is an integral part of these TOU.
            </p>
            <p>
              The User is the data controller within the meaning of the GDPR and applicable African laws
              for the data of their End Customers that they import and process via the Platform. Fayko acts
              as a data processor for these data.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              The User can terminate their account at any time from their profile settings or
              by contacting the Faymaco team. Termination takes effect at the end of the current Subscription
              period. No prorated refunds are issued.
            </p>
            <p>
              Fayko reserves the right to suspend or terminate any account in case of violation of these
              TOU, without prior notice or refund. The User will be notified by email of the reasons
              for the termination, unless legally or technically impossible.
            </p>
            <p>
              After termination, User data is retained for 90 days to allow them
              to perform an export, then permanently deleted.
            </p>
          </Section>

          <Section title="12. Modifications to the TOU">
            <p>
              Fayko reserves the right to modify these TOU at any time. Modifications
              take effect 15 days after their publication on the Platform. The User will be
              informed by email of any substantial changes.
            </p>
            <p>
              Continued use of the Platform after the new TOU take effect constitutes acceptance
              of them. In case of disagreement, the User must stop using the Platform and
              terminate their account.
            </p>
          </Section>

          <Section title="13. Applicable Law and Dispute Resolution">
            <p>
              These TOU are governed by Senegalese law. In the event of a dispute, the parties agree
              to seek an amicable solution before taking any legal action.
            </p>
            <p>
              Failing an amicable resolution within 30 days, any dispute relating to these
              TOU will be subject to the exclusive jurisdiction of the competent courts of Dakar (Senegal).
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              For any questions regarding these TOU, the User may contact Fayko at the following
              address:
            </p>
            <div className="mt-3 bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4 text-sm space-y-1">
              <p><strong className="text-[#143028] dark:text-white">Fayko</strong></p>
              <p>Email: <a href="mailto:support@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">support@peelo.chat</a></p>
              <p>WhatsApp: available via the Platform</p>
              <p>Dakar, Senegal</p>
            </div>
          </Section>

        </div>

        ) : (
<div className="bg-white dark:bg-[#143028]/20 rounded-2xl border border-[#143028]/8 dark:border-white/8 p-6 md:p-10">

          <Section title="1. Présentation du service">
            <p>
              Faymaco est une plateforme SaaS éditée par la société Fayko, permettant aux entreprises et aux
              professionnels africains d'automatiser l'envoi de demandes de paiement, de relances et de
              confirmations via WhatsApp, en intégration avec les services de paiement mobile tels que Wave,
              Orange Money et Free Money.
            </p>
            <p>
              L'accès et l'utilisation de Faymaco impliquent l'acceptation pleine et entière des présentes
              Conditions Générales d'Utilisation (CGU). Toute utilisation contraire aux présentes CGU entraîne
              la résiliation du compte de l'utilisateur.
            </p>
          </Section>

          <Section title="2. Définitions">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>« Plateforme »</strong> : le logiciel Faymaco accessible via le site web et/ou les API.</li>
              <li><strong>« Utilisateur »</strong> : toute personne physique ou morale ayant créé un compte sur la Plateforme.</li>
              <li><strong>« Client final »</strong> : le destinataire des messages WhatsApp envoyés par l'Utilisateur via la Plateforme.</li>
              <li><strong>« Message »</strong> : tout message WhatsApp envoyé depuis la Plateforme vers un Client final.</li>
              <li><strong>« Abonnement »</strong> : le plan tarifaire souscrit par l'Utilisateur (Free, Pro, Business, etc.).</li>
              <li><strong>« Données »</strong> : l'ensemble des informations saisies ou importées par l'Utilisateur sur la Plateforme.</li>
            </ul>
          </Section>

          <Section title="3. Accès au service et création de compte">
            <p>
              Pour accéder à Faymaco, l'Utilisateur doit créer un compte en fournissant des informations exactes,
              complètes et à jour : nom complet, adresse email professionnelle valide, numéro WhatsApp actif et
              données relatives à son activité.
            </p>
            <p>
              L'Utilisateur est seul responsable de la confidentialité de ses identifiants de connexion. Tout
              accès à la Plateforme effectué avec ses identifiants est présumé réalisé par l'Utilisateur. En cas
              de perte ou de compromission, l'Utilisateur doit contacter immédiatement l'équipe Faymaco à
              l'adresse <a href="mailto:support@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">support@peelo.chat</a>.
            </p>
            <p>
              L'accès est réservé aux personnes majeures (18 ans ou plus) disposant de la capacité juridique
              pour conclure des contrats dans leur pays de résidence.
            </p>
          </Section>

          <Section title="4. Description des fonctionnalités">
            <p>La Plateforme propose notamment les fonctionnalités suivantes selon le plan souscrit :</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Création et envoi de demandes de paiement par WhatsApp</li>
              <li>Gestion de relances automatisées pour les paiements en retard</li>
              <li>Gestion d'abonnements et de paiements récurrents</li>
              <li>Génération automatique de factures PDF</li>
              <li>Import en masse de clients via fichier Excel</li>
              <li>Tableau de bord de suivi des paiements et des clients</li>
              <li>Intégration avec les APIs de paiement mobile (Wave, Orange Money, Free Money)</li>
            </ul>
            <p className="mt-2">
              Fayko se réserve le droit de modifier, ajouter ou supprimer des fonctionnalités à tout moment,
              sous réserve d'en informer les Utilisateurs avec un préavis raisonnable.
            </p>
          </Section>

          <Section title="5. Plans tarifaires et facturation">
            <p>
              Faymaco propose plusieurs plans tarifaires (Free, Pro, Business, Enterprise) dont le détail est
              disponible sur la page Tarifs de la Plateforme. Les tarifs sont exprimés en Francs CFA (XOF) ou
              dans la devise applicable au pays de l'Utilisateur.
            </p>
            <p>
              Le plan Free est soumis à des quotas à vie non renouvelables mensuellement. Les plans payants
              bénéficient d'un reset mensuel des quotas le 1er de chaque mois.
            </p>
            <p>
              Tout Abonnement payant est facturé à l'avance pour la période choisie (mensuelle ou annuelle).
              Les paiements ne sont pas remboursables sauf disposition légale contraire ou accord exprès de
              l'équipe Faymaco.
            </p>
            <p>
              En cas de non-paiement à l'échéance, Fayko se réserve le droit de suspendre ou résilier l'accès
              à la Plateforme après une mise en demeure restée sans effet pendant 7 jours.
            </p>
          </Section>

          <Section title="6. Obligations de l'Utilisateur">
            <p>L'Utilisateur s'engage à :</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                N'envoyer des messages WhatsApp qu'à des personnes ayant donné leur consentement préalable
                à recevoir des communications commerciales ou de facturation.
              </li>
              <li>
                Respecter la réglementation applicable en matière de protection des données personnelles,
                notamment les lois en vigueur dans son pays d'exercice.
              </li>
              <li>
                Ne pas utiliser la Plateforme à des fins illicites, frauduleuses, ou contraires à l'ordre
                public (spam, phishing, fraude financière, harcèlement, etc.).
              </li>
              <li>
                Ne pas tenter de contourner les limitations techniques ou les quotas de la Plateforme.
              </li>
              <li>
                Maintenir à jour les informations de son compte et notifier tout changement significatif
                concernant son activité.
              </li>
              <li>
                S'assurer que les montants indiqués dans les demandes de paiement correspondent à des
                prestations ou biens réellement fournis.
              </li>
            </ul>
          </Section>

          <Section title="7. Propriété intellectuelle">
            <p>
              La Plateforme Faymaco, son code source, ses interfaces, ses marques, logos, et l'ensemble
              des contenus qui y sont publiés sont la propriété exclusive de Fayko et sont protégés par les
              lois relatives à la propriété intellectuelle.
            </p>
            <p>
              L'Utilisateur bénéficie d'une licence d'utilisation personnelle, non exclusive, non transférable
              et révocable de la Plateforme, pour la durée de son Abonnement, dans le cadre de ses activités
              professionnelles propres.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle,
              de la Plateforme ou de ses composants est strictement interdite sans l'accord préalable écrit de
              Fayko.
            </p>
          </Section>

          <Section title="8. Disponibilité et maintenance">
            <p>
              Fayko s'engage à faire ses meilleurs efforts pour assurer la disponibilité de la Plateforme
              24h/24 et 7j/7. Toutefois, des interruptions peuvent survenir pour des raisons de maintenance,
              de mises à jour, ou à cause de problèmes techniques indépendants de la volonté de Fayko.
            </p>
            <p>
              Les maintenances programmées sont annoncées au minimum 24 heures à l'avance par email et/ou
              via la Plateforme. Les maintenances d'urgence peuvent intervenir sans préavis.
            </p>
            <p>
              Fayko ne peut être tenu responsable des interruptions de service causées par des tiers
              (opérateurs télécom, Meta/WhatsApp, prestataires de paiement mobile, hébergeurs) ou par
              des cas de force majeure.
            </p>
          </Section>

          <Section title="9. Limitation de responsabilité">
            <p>
              La Plateforme Faymaco est un outil d'automatisation de communications. Fayko n'est pas partie
              aux transactions financières entre l'Utilisateur et ses Clients finaux, et ne peut être tenu
              responsable :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Des montants non perçus ou des litiges commerciaux entre l'Utilisateur et ses clients.</li>
              <li>Des messages non délivrés pour des raisons imputables à WhatsApp ou à l'opérateur télécom.</li>
              <li>Des pertes de données résultant d'une mauvaise utilisation de la Plateforme.</li>
              <li>De tout préjudice indirect, consécutif, spécial ou punitif résultant de l'utilisation ou
              de l'impossibilité d'utiliser la Plateforme.</li>
            </ul>
            <p className="mt-3">
              La responsabilité totale de Fayko ne pourra en aucun cas excéder le montant des sommes
              effectivement payées par l'Utilisateur au cours des trois (3) derniers mois précédant
              l'événement générateur.
            </p>
          </Section>

          <Section title="10. Protection des données personnelles">
            <p>
              Fayko collecte et traite des données personnelles dans le cadre de la fourniture du service.
              Ces traitements sont décrits dans la{' '}
              <Link to="/politique-confidentialite" className="text-[#143028] dark:text-[#DAFFD1] underline font-medium">
                Politique de Confidentialité
              </Link>{' '}
              de Faymaco, qui fait partie intégrante des présentes CGU.
            </p>
            <p>
              L'Utilisateur est responsable de traitement au sens du RGPD et des lois africaines applicables
              pour les données de ses Clients finaux qu'il importe et traite via la Plateforme. Fayko agit
              en qualité de sous-traitant pour ces données.
            </p>
          </Section>

          <Section title="11. Résiliation">
            <p>
              L'Utilisateur peut résilier son compte à tout moment depuis les paramètres de son profil ou
              en contactant l'équipe Faymaco. La résiliation prend effet à la fin de la période d'Abonnement
              en cours. Aucun remboursement proratisé n'est effectué.
            </p>
            <p>
              Fayko se réserve le droit de suspendre ou résilier tout compte en cas de violation des
              présentes CGU, sans préavis ni remboursement. L'Utilisateur sera notifié par email des raisons
              de la résiliation, sauf si cela est légalement ou techniquement impossible.
            </p>
            <p>
              Après résiliation, les données de l'Utilisateur sont conservées pendant 90 jours pour lui
              permettre d'en effectuer une exportation, puis définitivement supprimées.
            </p>
          </Section>

          <Section title="12. Modifications des CGU">
            <p>
              Fayko se réserve le droit de modifier les présentes CGU à tout moment. Les modifications
              entrent en vigueur 15 jours après leur publication sur la Plateforme. L'Utilisateur sera
              informé par email de toute modification substantielle.
            </p>
            <p>
              L'utilisation de la Plateforme après l'entrée en vigueur des nouvelles CGU vaut acceptation
              de celles-ci. En cas de désaccord, l'Utilisateur doit cesser d'utiliser la Plateforme et
              résilier son compte.
            </p>
          </Section>

          <Section title="13. Droit applicable et règlement des litiges">
            <p>
              Les présentes CGU sont régies par le droit sénégalais. En cas de litige, les parties s'engagent
              à rechercher une solution amiable avant toute action judiciaire.
            </p>
            <p>
              À défaut de résolution amiable dans un délai de 30 jours, tout litige relatif aux présentes
              CGU sera soumis à la compétence exclusive des tribunaux compétents de Dakar (Sénégal).
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              Pour toute question relative aux présentes CGU, l'Utilisateur peut contacter Fayko à l'adresse
              suivante :
            </p>
            <div className="mt-3 bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4 text-sm space-y-1">
              <p><strong className="text-[#143028] dark:text-white">Fayko</strong></p>
              <p>Email : <a href="mailto:support@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">support@peelo.chat</a></p>
              <p>WhatsApp : disponible via la Plateforme</p>
              <p>Dakar, Sénégal</p>
            </div>
          </Section>

        </div>

        
        )}
        {/* Footer navigation */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#143028]/50 dark:text-white/30">
          <Link to="/" className="hover:text-[#143028] dark:hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> {isEn ? "Back to Home" : "Retour à l'accueil"}
          </Link>
          <Link to="/politique-confidentialite" className="hover:text-[#143028] dark:hover:text-white transition-colors">
            {isEn ? "Privacy Policy →" : "Politique de Confidentialité →"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CGU;
