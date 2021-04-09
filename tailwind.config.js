module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 10%": {
                        transform: "rotate(-10deg)",
                    },
                    "5%, 15%": {
                        transform: "rotate(10deg)",
                    },
                    "20%": { transform: "rotate(0deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 3s ease-in-out infinite",
            },
        },
    },
    variants: {},
    plugins: [],
};
