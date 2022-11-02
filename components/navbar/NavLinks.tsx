import useLoginForm from "../../hooks/useLoginForm";
import React from 'react'
import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NavLinks = () => {
  const { t } = useTranslation('common');
  const { handleLogOut } = useLoginForm({})
  return (
    <ul>
      <li>{t("navLi1")}</li>
      <li>{t("navLi2")}</li>
      <li onClick={handleLogOut}>Cerrar seisión</li>
    </ul>
  )
}

// export async function getStaticProps({ locale }: any) {
//   return {
//     props: {
//       ...await serverSideTranslations(locale, ['common']),
//     },
//   }
// }

export default NavLinks;