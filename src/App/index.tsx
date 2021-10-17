import React from 'react'
import { Suspense } from 'react'
import Style from './styles/index.less'
import Menu from '@/Menu'
import Ani from '@/Ani'

export default function App() {
  return (
    <div className={Style.App}>
      <Menu />
      <Ani />
    </div>
  )
}
