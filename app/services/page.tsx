import React from 'react'
import Link from 'next/link'
import cssStyle from "./page.module.css"

export default function() {
  return (
    <div>
        <h1 className={cssStyle.hding}>Services!!!</h1>
        <p>for further imformation click below</p>
        <Link className={cssStyle.lnk} href="./services/nestedPage" target='_blank'>For Further Information!!!</Link>
    </div>
  )
}
