import { profile } from '../data/portfolio'

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src={profile.brandLogo} width="1024" height="1024" alt="" />
    </span>
  )
}
