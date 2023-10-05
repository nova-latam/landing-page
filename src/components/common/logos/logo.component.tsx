import React from 'react'
import Image from 'next/image'

export default function logo() {
  return (
    <Image
        src="/logo.png"
        alt="Nova Club"
        width={130}
        height={50}
    />
  )
}
