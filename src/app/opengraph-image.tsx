import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CoreClub — Seu passaporte para o bem-estar';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0E1C12 0%, #121412 60%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow circles */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: '#E4D5B7',
            opacity: 0.1,
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: '#14261A',
            opacity: 0.3,
            filter: 'blur(60px)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 64, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-2px' }}>
            Core
          </span>
          <span style={{ fontSize: 64, fontWeight: 900, color: '#E4D5B7', letterSpacing: '-2px' }}>
            Club
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: '#FFFFFF',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.3,
            marginBottom: 20,
          }}
        >
          Seu passaporte para o bem-estar.
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: '#A3B4A9',
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Cupons exclusivos · Treinos personalizados · E-books nutricionais
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(228,213,183,0.1)',
            border: '1px solid rgba(228,213,183,0.3)',
            borderRadius: 999,
            padding: '10px 24px',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#E4D5B7',
            }}
          />
          <span style={{ fontSize: 18, color: '#E4D5B7', fontWeight: 600 }}>
            Clube de benefícios completo
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
