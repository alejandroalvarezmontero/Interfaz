module.exports= {
    theme:{
        extend: {
            backgroundImage:{
                'hero-pattern': "url('/img/hero-pattern.svg')",
                'footer-texture': "url('/img/footer-texture.png')",
                animation: {
                    'spin-slow': 'spin 3s linear infinite',
                    wiggle: 'wiggle 1s ease-in-out infinite',
                  }
              
            }
        }
    }
}