
import { useTranslation } from 'react-i18next';

export default function Service() {
  const { t } = useTranslation();
  return (
    <div>
       <h1>{t('pageservice.heading')} </h1>
       <p style={{ whiteSpace: "pre-line" }}>{t('pageservice.text')}</p>
    </div>
  )
}
