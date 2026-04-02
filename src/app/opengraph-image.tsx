import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'SOLOPRENEUR'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#011627',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}>
        <h1 style={{ fontSize: 32, color: '#18f2e5', margin: 0 }}>
          Carl Lorenze Dela Cruz | Full-Stack Web Developer in Pasig
        </h1>
        <h2 style={{ fontSize: 40, color: 'white', marginTop: 30 }}>
          A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Laravel and some other cool libraries and frameworks.
        </h2>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    },
  )
}
