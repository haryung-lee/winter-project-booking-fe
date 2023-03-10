import Head from 'next/head'

import BaseLayout from 'components/common/base-layout'
import DetailContainer from 'components/detail'

export default function Detail() {
  return (
    <>
      <Head>
        <title>인천대 책 정보 제공 서비스</title>
      </Head>
      <BaseLayout>
        <DetailContainer />
      </BaseLayout>
    </>
  )
}
