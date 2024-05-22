import type { Metadata } from 'next'
import './globals.scss'
import Gnb from './gnb'

export const metadata: Metadata = {
  title: 'UI요소모음',
  description: 'Vanilla / React',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  )
}
export default Layout
