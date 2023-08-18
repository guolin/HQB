import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export type AppIconProps = {
  size?: 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
      }}
    >
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEPUlEQVR4AczXA3BkWRTG8ZcNKtXZsVnGYmzbtm3btm3bnmBsT6fGts3OOLj7v1VndRbB8lb9Xr3cd875btzt7OmVqq/DejPUSYiHMMpeJ47L9sIoD5HQYdlse4lECWkoB6OEwRWHcJf0GqWchBdHpL0xeIts0jgBRmkZhwO0hFEmSHh2yTSOvYjnyEqRNwJV43OkiEV4CjxXM4LgbTMky+gDWG9RQr58+vt3ColjEJ4Yp/TPEVzMLo/3ML88wCl1iEj0vz/Iz5+mBWrQPVSGlw62e/LsnupZcL5//PjMnAijnHO4eKMDPOrhQXzPgHp4qoZewxR0FFNwTdU8RT1mlMV1Ndsjmd5O4tkLMsgPRiqsUoXhmO3umzgzw3rhNkw07qD34T7JytG7G0ZZjVQOy2bbi0EIispBcmG/aopA4N5eqRreHuhfgIA2GIcFWCz37a4NCChBXVeEwij7kUuCi0qmkQMAcKMJAijOiw0Ih1HuYztWYw124AmMEi4z8tiZMtsNI9QBBDxYhgpDh5ZKx4B22AoPTDTCpLat7bUzZJYHRnO4RMH8iU/YgxFJZ8+rVnV8+5LL+2eoQkBDtBcN7Z59ZmtsrfR8gvkTUQ6XRCiP0TiGLzDRkbo3IqY9n3EcYyQzkeOMv1QIaRxZbPoiA+piFDbhJB4jCiYaEbiPY1iD4aiFb+HjyLKZNtveGPEeZxGIuRiBtqiDCijsNeFcNr/JB/O5pm7PHzAtqNjX07eUtQKmBRexe76Tj+T0mnA+q62VnjoyY4TMDJQMsiTXXv4L/8sDRPstcMZdzOaMPJ3PGRqa3xniLu4MPlnW4r6I3XNGnclJTey+BfqH0Ol7yBcZUBejsAluPEYUTDQicB/HsAbDUQvf4rc/hGwmQnmMlqYvMNGRujcipj2fcRxjQCbZMfisPmEPRnzV91C1gr13l5zQM7DKyh6bG6K9aGj37DNbY2ul59OfzyZbbjQPlqFCp14h6Qloi60Ig4lGmNS2tb12hszywGj6AG40QQAD8mADwmGU+9iO1ViDHXgCo4TLjDx2psx2/94BQlDUYVGcC/vVoAgEruq+qeGJwpMKXP5uaBuMwwIsxli0O1JyWglqulIbCqPsRy7HLrIk09gPMkhwKqyG/gxmBzdcmpmAXrgNE4076L255apy9O6GUVYjlRwkgw32Rgd4VOFBfM+weniqQq5hCjqKKbimap6iHjPK4rqa7ZFMb4fLKfUwEv3dBSf6M2CBGnoPleHlqGX35Nk91bNgV4358Zk5EUY556iNtyhBkwt71aBTSOxEs2wNTqnevXAxuzzewwjzywM8R1YKvRGoBjxHjN+Y2Fo8VzOC4G0z8Fwf4C2ySfMEGCXWb81sD4wyQX7gs0umceR7XkKaysEoYXDF4QAu6TVKOTlEcUTam77SkBAPYZQfRnb3HEs6+g+1QwDqiCoAph5qpu1rpoAAAAAASUVORK5CYII=" />
    </span>
  )
}

export default AppIcon
