import React from 'react';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import {defaultPageCoverPosition} from '../../lib/config'

const NotionPage = ({
  recordMap,
  rootPageId,
} : {
  recordMap: ExtendedRecordMap
  rootPageId?: string,
}) => {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)
  return (
    <>
      <Head>
        <meta name='description' content='React Notion X Minimal Demo' />
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        previewImages={!!recordMap.preview_images}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        components={{
          nextImage: Image,
          nextLink: Link,
        }}
        defaultPageCoverPosition={defaultPageCoverPosition}
      />
    </>
  )
}

export default NotionPage;