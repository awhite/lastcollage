import React from 'react'
import Link from './FooterLink'

interface Props {
  onClick: React.MouseEventHandler<HTMLAnchorElement>
}

const WhatsNewLink = ({ onClick }: Props) => (
  <Link href="#" onClick={onClick}>
    What's new?
  </Link>
)

export default WhatsNewLink
