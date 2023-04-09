module.export = {
    style: {
        postcss: {
            plugins: {
                require('tailwindcss'),
                require('autoprefixer'),
            }
        }
    }
}