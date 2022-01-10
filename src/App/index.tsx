import React from 'react'
import { Suspense } from 'react'
import Style from './styles/index.less'
import Menu from '@/Menu'
import Ani from '@/Ani'
// import Demo from './demo'

export default function App() {
  return (
    <div className={Style.App}>
      {/* <Menu />
      <Ani /> */}
      {/* <Demo /> */}
      大法师地方
      <div className={Style.grid}>
        <div>
          <p>1</p>
        </div>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
        </div>
      </div>
    </div>
  )
}
