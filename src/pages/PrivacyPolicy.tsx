import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ArrowLeft, ShieldCheck } from 'lucide-react';
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

const PrivacyPolicy: React.FC = () => {
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
            {isEn ? "Privacy Policy" : "Politique de Confidentialité"}
          </h1>
          <p className="text-[#143028]/50 dark:text-white/40 text-sm">
            {isEn ? "Last updated: April 14, 2026 &nbsp;·&nbsp; Version 1.0" : "Dernière mise à jour : 14 avril 2026 &nbsp;·&nbsp; Version 1.0"}
          </p>
        </div>

        
        {isEn ? (

        <div className="bg-white dark:bg-[#143028]/20 rounded-2xl border border-[#143028]/8 dark:border-white/8 p-6 md:p-10">

          <Section title="1. Who are we?">
            <p>
              This Privacy Policy describes how Fayko (hereinafter "we",
              "our" or "Faymaco") collects, uses, and protects the personal data of
              users of the Faymaco platform, accessible at peelo.chat.
            </p>
            <p>
              Fayko is the data controller for the data collected on the Platform. We are
              committed to protecting the privacy of our users in accordance with applicable laws,
              particularly the Senegalese law No. 2008-12 on the protection of personal data and,
              where possible, the principles of the European GDPR.
            </p>
          </Section>

          <Section title="2. Data we collect">
            <p>We collect the following categories of data:</p>
            <div className="mt-3 space-y-4">
              <div className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4">
                <p className="font-semibold text-[#143028] dark:text-white mb-2">2.1 Account Data (User)</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>First and last name</li>
                  <li>Professional email address</li>
                  <li>WhatsApp phone number</li>
                  <li>Company name and industry</li>
                  <li>Country of operation</li>
                  <li>Plan and subscription information (active plan, subscription date)</li>
                </ul>
              </div>
              <div className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4">
                <p className="font-semibold text-[#143028] dark:text-white mb-2">2.2 End Customer Data</p>
                <p className="text-xs text-[#143028]/60 dark:text-white/50 mb-2">
                  These data are imported or entered by the User and processed by Faymaco
                  as a data processor.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>First and last name of the end customer</li>
                  <li>WhatsApp phone number</li>
                  <li>Amounts due, due dates, payment statuses</li>
                  <li>History of messages and payment cycles</li>
                </ul>
              </div>
              <div className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4">
                <p className="font-semibold text-[#143028] dark:text-white mb-2">2.3 Technical and Browsing Data</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IP address, browser type, operating system</li>
                  <li>Pages visited, session duration, clicks</li>
                  <li>Error and performance logs</li>
                </ul>
              </div>
              <div className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4">
                <p className="font-semibold text-[#143028] dark:text-white mb-2">2.4 Waitlist Data</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full name, email, WhatsApp number</li>
                  <li>Role, company, country, industry</li>
                  <li>Description of the use case</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="3. Why do we collect these data?">
            <p>We process your data for the following purposes:</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#DAFFD1] text-[#143028]">
                    <th className="text-left p-3 rounded-tl-lg font-semibold">Purpose</th>
                    <th className="text-left p-3 font-semibold">Legal Basis</th>
                    <th className="text-left p-3 rounded-tr-lg font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#143028]/5 dark:divide-white/5">
                  <tr className="dark:bg-[#143028]/20">
                    <td className="p-3">Account creation and management</td>
                    <td className="p-3">Execution of the contract</td>
                    <td className="p-3">Account duration + 90 days</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/10">
                    <td className="p-3">Sending WhatsApp messages</td>
                    <td className="p-3">Execution of the contract</td>
                    <td className="p-3">Account duration</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/20">
                    <td className="p-3">Billing and subscriptions</td>
                    <td className="p-3">Legal obligation</td>
                    <td className="p-3">10 years (accounting law)</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/10">
                    <td className="p-3">Service improvement</td>
                    <td className="p-3">Legitimate interest</td>
                    <td className="p-3">12 rolling months</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/20">
                    <td className="p-3">Waitlist & communications</td>
                    <td className="p-3">Consent</td>
                    <td className="p-3">Until consent is withdrawn</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/10">
                    <td className="p-3">Security and fraud prevention</td>
                    <td className="p-3">Legitimate interest</td>
                    <td className="p-3">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Sharing data with third parties">
            <p>
              Faymaco does not sell your personal data. We may share them only in
              the following cases:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Peelo (WhatsApp service):</strong> for sending messages, the recipient's
                phone number is sent to the Peelo API, which communicates with Meta/WhatsApp.
              </li>
              <li>
                <strong>Host (cloud server):</strong> the data are hosted on secure
                servers. Our host does not have access to the content of your data and acts
                as a data processor.
              </li>
              <li>
                <strong>Legal Authorities:</strong> in the event of a legal obligation, judicial decision
                or to respond to an official request from the competent authorities.
              </li>
              <li>
                <strong>Business Transfer:</strong> in the event of a merger, acquisition, or asset sale,
                provided the new owner agrees to comply with this policy.
              </li>
            </ul>
            <p className="mt-3 text-xs bg-[#DAFFD1]/30 dark:bg-[#DAFFD1]/10 border border-[#DAFFD1] rounded-lg p-3 text-[#143028] dark:text-[#DAFFD1]">
              We do not use your data for advertising purposes and do not transmit them
              to ad networks.
            </p>
          </Section>

          <Section title="5. Data Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your data against unauthorized access, disclosure, alteration, or
              destruction:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Data encryption in transit (HTTPS/TLS)</li>
              <li>Password hashing with secure algorithms (bcrypt)</li>
              <li>Token-based authentication (JWT) with short expiration</li>
              <li>Access to production data restricted to authorized team members</li>
              <li>Encrypted regular backups</li>
              <li>Logging of sensitive accesses</li>
            </ul>
            <p className="mt-3">
              No system is foolproof. In the event of a data breach likely to affect
              your rights, we commit to notifying you as soon as possible
              in accordance with applicable regulations.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>
              In accordance with applicable regulations, you have the following rights regarding
              your personal data:
            </p>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {[
                { right: 'Right of Access', desc: 'Obtain a copy of the data concerning you.' },
                { right: 'Right to Rectification', desc: 'Correct inaccurate or incomplete data.' },
                { right: 'Right to Erasure', desc: 'Request the deletion of your data in cases provided by law.' },
                { right: 'Right to Portability', desc: 'Receive your data in a structured, machine-readable format.' },
                { right: 'Right to Object', desc: 'Object to processing based on legitimate interest.' },
                { right: 'Withdrawal of Consent', desc: 'Withdraw your consent at any time without prejudice.' },
              ].map(({ right, desc }) => (
                <div
                  key={right}
                  className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-3 border border-[#143028]/5 dark:border-white/5"
                >
                  <p className="font-semibold text-[#143028] dark:text-white text-xs mb-1">{right}</p>
                  <p className="text-xs text-[#143028]/60 dark:text-white/50">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">
                privacy@peelo.chat
              </a>{' '}
              attaching a copy of an identity document. We will respond within
              30 business days.
            </p>
          </Section>

          <Section title="7. Cookies and Trackers">
            <p>
              Faymaco uses cookies and similar technologies to ensure the proper functioning
              of the Platform, remember your preferences, and analyze service usage:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Essential Cookies:</strong> necessary for the operation of the Platform
                (authentication, session). They cannot be disabled.
              </li>
              <li>
                <strong>Preference Cookies:</strong> remember your choices (language, dark/light theme).
              </li>
              <li>
                <strong>Analytics Cookies:</strong> help us understand how you use
                the Platform in order to improve it. These cookies are anonymized where possible.
              </li>
            </ul>
            <p className="mt-3">
              You can manage your cookie preferences through your browser
              settings. Disabling some cookies may affect the functioning of
              the Platform.
            </p>
          </Section>

          <Section title="8. International Data Transfers">
            <p>
              Your data is primarily processed and stored in West Africa. In some
              cases, they may be transferred to other regions (notably for cloud infrastructure
              services). In all cases, we ensure that these transfers take place
              under conditions guaranteeing an adequate level of protection, notably via standard
              contractual clauses.
            </p>
          </Section>

          <Section title="9. Minors' Data">
            <p>
              Faymaco is intended exclusively for professionals and businesses. We do not knowingly
              collect personal data from minors (under 18 years old). If you
              believe a minor has provided us with data, contact us immediately at{' '}
              <a href="mailto:privacy@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">
                privacy@peelo.chat
              </a>{' '}
              and we will delete them.
            </p>
          </Section>

          <Section title="10. Policy Modifications">
            <p>
              We may update this Privacy Policy in response to legal,
              regulatory, or technical developments. The date of the last update is shown at the top
              of this document. You will be notified by email of any substantial modification at least
              15 days before it takes effect.
            </p>
          </Section>

          <Section title="11. Contact and Complaints">
            <p>
              For any questions regarding this policy or to exercise your rights, please contact
              our Data Protection Officer:
            </p>
            <div className="mt-3 bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4 text-sm space-y-1">
              <p><strong className="text-[#143028] dark:text-white">Fayko — Data Protection</strong></p>
              <p>Email: <a href="mailto:privacy@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">privacy@peelo.chat</a></p>
              <p>Dakar, Senegal</p>
            </div>
            <p className="mt-4">
              If you believe that the processing of your data does not comply with applicable
              regulations, you can file a complaint with the{' '}
              <strong>Commission for the Protection of Personal Data (CDP)</strong> of Senegal or
              the data protection authority of your country of residence.
            </p>
          </Section>

        </div>

        ) : (
<div className="bg-white dark:bg-[#143028]/20 rounded-2xl border border-[#143028]/8 dark:border-white/8 p-6 md:p-10">

          <Section title="1. Qui sommes-nous ?">
            <p>
              La présente Politique de Confidentialité décrit la façon dont Fayko (ci-après « nous »,
              « notre » ou « Faymaco ») collecte, utilise et protège les données personnelles des
              utilisateurs de la plateforme Faymaco, accessible à l'adresse peelo.chat.
            </p>
            <p>
              Fayko est le responsable de traitement des données collectées sur la Plateforme. Nous nous
              engageons à protéger la vie privée de nos utilisateurs conformément aux lois applicables,
              notamment la loi sénégalaise n° 2008-12 sur la protection des données personnelles et,
              dans la mesure du possible, les principes du RGPD européen.
            </p>
          </Section>

          <Section title="2. Données que nous collectons">
            <p>Nous collectons les catégories de données suivantes :</p>
            <div className="mt-3 space-y-4">
              <div className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4">
                <p className="font-semibold text-[#143028] dark:text-white mb-2">2.1 Données de compte (Utilisateur)</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email professionnelle</li>
                  <li>Numéro de téléphone WhatsApp</li>
                  <li>Nom de l'entreprise et secteur d'activité</li>
                  <li>Pays d'exercice</li>
                  <li>Informations de plan et d'abonnement (plan actif, date de souscription)</li>
                </ul>
              </div>
              <div className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4">
                <p className="font-semibold text-[#143028] dark:text-white mb-2">2.2 Données des clients finaux</p>
                <p className="text-xs text-[#143028]/60 dark:text-white/50 mb-2">
                  Ces données sont importées ou saisies par l'Utilisateur et traitées par Faymaco
                  en qualité de sous-traitant.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nom et prénom du client final</li>
                  <li>Numéro de téléphone WhatsApp</li>
                  <li>Montants dus, dates d'échéance, statuts de paiement</li>
                  <li>Historique des messages et des cycles de paiement</li>
                </ul>
              </div>
              <div className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4">
                <p className="font-semibold text-[#143028] dark:text-white mb-2">2.3 Données techniques et de navigation</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Adresse IP, type de navigateur, système d'exploitation</li>
                  <li>Pages visitées, durée de session, clics</li>
                  <li>Logs d'erreurs et de performance</li>
                </ul>
              </div>
              <div className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4">
                <p className="font-semibold text-[#143028] dark:text-white mb-2">2.4 Données de la liste d'attente</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nom complet, email, numéro WhatsApp</li>
                  <li>Rôle, entreprise, pays, secteur d'activité</li>
                  <li>Description du cas d'usage</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="3. Pourquoi collectons-nous ces données ?">
            <p>Nous traitons vos données pour les finalités suivantes :</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#DAFFD1] text-[#143028]">
                    <th className="text-left p-3 rounded-tl-lg font-semibold">Finalité</th>
                    <th className="text-left p-3 font-semibold">Base légale</th>
                    <th className="text-left p-3 rounded-tr-lg font-semibold">Durée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#143028]/5 dark:divide-white/5">
                  <tr className="dark:bg-[#143028]/20">
                    <td className="p-3">Création et gestion du compte</td>
                    <td className="p-3">Exécution du contrat</td>
                    <td className="p-3">Durée du compte + 90 jours</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/10">
                    <td className="p-3">Envoi des messages WhatsApp</td>
                    <td className="p-3">Exécution du contrat</td>
                    <td className="p-3">Durée du compte</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/20">
                    <td className="p-3">Facturation et abonnements</td>
                    <td className="p-3">Obligation légale</td>
                    <td className="p-3">10 ans (loi comptable)</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/10">
                    <td className="p-3">Amélioration du service</td>
                    <td className="p-3">Intérêt légitime</td>
                    <td className="p-3">12 mois glissants</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/20">
                    <td className="p-3">Liste d'attente & communications</td>
                    <td className="p-3">Consentement</td>
                    <td className="p-3">Jusqu'au retrait du consentement</td>
                  </tr>
                  <tr className="dark:bg-[#143028]/10">
                    <td className="p-3">Sécurité et prévention des fraudes</td>
                    <td className="p-3">Intérêt légitime</td>
                    <td className="p-3">12 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Partage des données avec des tiers">
            <p>
              Faymaco ne vend pas vos données personnelles. Nous pouvons les partager uniquement dans
              les cas suivants :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Peelo (service WhatsApp) :</strong> pour l'envoi des messages, le numéro de
                téléphone du destinataire est transmis à l'API Peelo qui communique avec Meta/WhatsApp.
              </li>
              <li>
                <strong>Hébergeur (serveur cloud) :</strong> les données sont hébergées sur des
                serveurs sécurisés. Notre hébergeur n'a pas accès au contenu de vos données et agit
                en qualité de sous-traitant.
              </li>
              <li>
                <strong>Autorités légales :</strong> en cas d'obligation légale, de décision judiciaire
                ou pour répondre à une demande officielle des autorités compétentes.
              </li>
              <li>
                <strong>Transfert d'entreprise :</strong> en cas de fusion, acquisition ou cession
                d'actifs, sous réserve que le repreneur s'engage à respecter la présente politique.
              </li>
            </ul>
            <p className="mt-3 text-xs bg-[#DAFFD1]/30 dark:bg-[#DAFFD1]/10 border border-[#DAFFD1] rounded-lg p-3 text-[#143028] dark:text-[#DAFFD1]">
              Nous n'utilisons pas vos données à des fins publicitaires et ne les transmettons pas
              à des réseaux publicitaires.
            </p>
          </Section>

          <Section title="5. Sécurité des données">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, divulgation, altération ou
              destruction :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Chiffrement des données en transit (HTTPS/TLS)</li>
              <li>Hachage des mots de passe avec des algorithmes sécurisés (bcrypt)</li>
              <li>Authentification par token (JWT) avec expiration courte</li>
              <li>Accès aux données de production restreint aux membres autorisés de l'équipe</li>
              <li>Sauvegardes régulières chiffrées</li>
              <li>Journalisation des accès sensibles</li>
            </ul>
            <p className="mt-3">
              Aucun système n'est infaillible. En cas de violation de données susceptible de porter
              atteinte à vos droits, nous nous engageons à vous en notifier dans les meilleurs délais
              conformément à la réglementation applicable.
            </p>
          </Section>

          <Section title="6. Vos droits">
            <p>
              Conformément à la réglementation applicable, vous disposez des droits suivants sur
              vos données personnelles :
            </p>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {[
                { right: 'Droit d\'accès', desc: 'Obtenir une copie des données vous concernant.' },
                { right: 'Droit de rectification', desc: 'Corriger des données inexactes ou incomplètes.' },
                { right: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données dans les cas prévus par la loi.' },
                { right: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format structuré et lisible par machine.' },
                { right: 'Droit d\'opposition', desc: 'Vous opposer au traitement fondé sur l\'intérêt légitime.' },
                { right: 'Retrait du consentement', desc: 'Retirer votre consentement à tout moment sans préjudice.' },
              ].map(({ right, desc }) => (
                <div
                  key={right}
                  className="bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-3 border border-[#143028]/5 dark:border-white/5"
                >
                  <p className="font-semibold text-[#143028] dark:text-white text-xs mb-1">{right}</p>
                  <p className="text-xs text-[#143028]/60 dark:text-white/50">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:privacy@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">
                privacy@peelo.chat
              </a>{' '}
              en joignant une copie d'un justificatif d'identité. Nous répondrons dans un délai de
              30 jours ouvrables.
            </p>
          </Section>

          <Section title="7. Cookies et traceurs">
            <p>
              Faymaco utilise des cookies et des technologies similaires pour assurer le fonctionnement
              de la Plateforme, mémoriser vos préférences et analyser l'utilisation du service :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Cookies essentiels :</strong> nécessaires au fonctionnement de la Plateforme
                (authentification, session). Ils ne peuvent pas être désactivés.
              </li>
              <li>
                <strong>Cookies de préférences :</strong> mémorisent vos choix (langue, thème sombre/clair).
              </li>
              <li>
                <strong>Cookies analytiques :</strong> nous aident à comprendre comment vous utilisez
                la Plateforme afin de l'améliorer. Ces cookies sont anonymisés dans la mesure du possible.
              </li>
            </ul>
            <p className="mt-3">
              Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre
              navigateur. La désactivation de certains cookies peut affecter le fonctionnement de
              la Plateforme.
            </p>
          </Section>

          <Section title="8. Transferts internationaux de données">
            <p>
              Vos données sont principalement traitées et stockées en Afrique de l'Ouest. Dans certains
              cas, elles peuvent être transférées vers d'autres régions (notamment pour les services
              d'infrastructure cloud). Dans tous les cas, nous nous assurons que ces transferts s'effectuent
              dans des conditions garantissant un niveau de protection adéquat, notamment via des clauses
              contractuelles types.
            </p>
          </Section>

          <Section title="9. Données des mineurs">
            <p>
              Faymaco est destiné exclusivement aux professionnels et entreprises. Nous ne collectons
              pas sciemment de données personnelles de personnes mineures (moins de 18 ans). Si vous
              pensez qu'un mineur nous a fourni des données, contactez-nous immédiatement à{' '}
              <a href="mailto:privacy@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">
                privacy@peelo.chat
              </a>{' '}
              et nous les supprimerons.
            </p>
          </Section>

          <Section title="10. Modifications de la politique">
            <p>
              Nous pouvons mettre à jour la présente Politique de Confidentialité en cas d'évolution
              légale, réglementaire ou technique. La date de dernière mise à jour est indiquée en haut
              de ce document. Toute modification substantielle vous sera notifiée par email au moins
              15 jours avant son entrée en vigueur.
            </p>
          </Section>

          <Section title="11. Contact et réclamations">
            <p>
              Pour toute question relative à la présente politique ou pour exercer vos droits, contactez
              notre délégué à la protection des données :
            </p>
            <div className="mt-3 bg-[#FCFAF7] dark:bg-[#143028]/40 rounded-xl p-4 text-sm space-y-1">
              <p><strong className="text-[#143028] dark:text-white">Fayko — Protection des données</strong></p>
              <p>Email : <a href="mailto:privacy@peelo.chat" className="text-[#143028] dark:text-[#DAFFD1] underline">privacy@peelo.chat</a></p>
              <p>Dakar, Sénégal</p>
            </div>
            <p className="mt-4">
              Si vous estimez que le traitement de vos données ne respecte pas la réglementation
              applicable, vous pouvez déposer une réclamation auprès de la{' '}
              <strong>Commission de Protection des Données Personnelles (CDP)</strong> du Sénégal ou
              de l'autorité de protection des données de votre pays de résidence.
            </p>
          </Section>

        </div>

        
        )}
        {/* Footer navigation */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#143028]/50 dark:text-white/30">
          <Link to="/" className="hover:text-[#143028] dark:hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> {isEn ? "Back to Home" : "Retour à l'accueil"}
          </Link>
          <Link to="/cgu" className="hover:text-[#143028] dark:hover:text-white transition-colors">
            {isEn ? "Terms of Use →" : "Conditions Générales d'Utilisation →"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
