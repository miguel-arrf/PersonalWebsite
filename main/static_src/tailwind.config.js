/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

const colors = require('tailwindcss/colors')

module.exports = {
    /**
     * Stylesheet generation mode.
     *
     * Set mode to "jit" if you want to generate your styles on-demand as you author your templates;
     * Set mode to "aot" if you want to generate the stylesheet in advance and purge later (aka legacy mode).
     */
    mode: "jit",

    purge: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /* 
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',
        
        /* 
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    darkMode: 'class', // or 'media' or 'class' -> antes estava media
    theme: {
        extend: {
            colors:{
                gray: colors.gray,
                'custom-yellow':'#fff4e5',
                'custom-blue':'#F0F4FF',
                'custom-green':'#FBFFEB',
                'vivid-yellow':'#E7CE4A',
                'vivid-pink':'#B6B2FF',
                'vivid-green':'#00E29A',
                'vivid-orange':'#FFB2B3',

                'apple-yellow':'rgb(255,214,10)',
            },
            boxShadow: {
                'vivid-yellow': '0px 12px 50px rgba(104, 92, 49, 0.8)',
                'vivid-pink':'0px 12px 50px rgba(120, 117, 172, 0.8)',
                'vivid-green':'0px 12px 50px rgba(1, 140, 96, 0.8)',

                'vivid-blue': '0px 12px 50px rgba(59, 92, 130, 0.92)',
                'vivid-purple': '0px 12px 50px rgba(168, 108, 158, 0.8)',
                'vivid-orange': '0px 12px 50px rgba(140, 85, 1, 0.8)',
                'vivid-red': '0px 12px 50px rgba(140, 1, 1, 0.8)',
      },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
