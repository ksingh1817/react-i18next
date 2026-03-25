import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div>
       <h1>{t('pagecontact.heading')} </h1>
       <p style={{ whiteSpace: "pre-line" }}>{t('pagecontact.text')}</p>
    </div>
  )
}
