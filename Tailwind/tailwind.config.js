module.exports= {
    variants: {
        extend:{
            animation:['responsive', 'hover','group-hover'],
            fontSize:['responsive', 'hover','group-hover'],
            transform:['responsive', 'hover','group-hover'],
            scale:['responsive', 'hover','group-hover'],
        }
    },
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