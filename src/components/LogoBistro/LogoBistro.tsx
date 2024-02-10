import { StyledLogoBistro } from "./LogoBistro.style"

interface LogoBistroProps {
  src: string
  alt: string
}

export default function LogoBistro({ alt, src }: LogoBistroProps) {

  return (
    <StyledLogoBistro src={src} alt={alt} />
  )

}


