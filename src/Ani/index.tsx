import React, { useRef, useEffect } from 'react'
import b from './b.png'
import vv from './vv.jpg'
import style from './index.less'
import gasp from 'gsap'

const Ani = () => {
  const header = useRef<HTMLImageElement>(null)
  const footer = useRef<HTMLImageElement>(null)
  useEffect(() => {
    // gasp.fromTo(
    //   header.current,
    //   { filter: 'grayscale(0%)', duration: '10s', x: 0 },
    //   { filter: 'grayscale(100%)', x: '500px' }
    // )
    var tt = gasp.timeline({ repeat: 2, repeatDelay: 1 })
    tt.to(footer.current, { x: 100, duration: 1 })
    tt.to(footer.current, { y: 50, duration: 1 })
    tt.to(footer.current, { opacity: 0, duration: 1 })

    var tl = gasp.timeline({ repeat: 2, repeatDelay: 1 })
    tl.to(header.current, { x: 100, duration: 1 })
    tl.to(header.current, { y: 50, duration: 1 })
    tl.to(header.current, { opacity: 0, duration: 1 })
    tl.add(tt, 0)
    tl.play()
  }, [header])
  return (
    <div className={style.ani}>
      <img src={b} className={style.ani} ref={header} />
      <img src={vv} className={style.ani} ref={footer} />
    </div>
  )
}

export default Ani
