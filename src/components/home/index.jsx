
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
         <h1>{t('pagehome.heading')} </h1>
         <p style={{ whiteSpace: "pre-line" }}>{t('pagehome.text')}</p>
    </div>
  )
}
