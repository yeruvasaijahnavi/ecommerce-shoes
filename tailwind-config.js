tailwind.config = {
    theme: {
        extend: {
            colors: {
                orange: "hsl(26, 100%, 55%)",
                paleorange: "hsl(25, 100%, 94%)",
                darkblue: "hsl(220, 13%, 13%)",
                dark_grayish_blue: "hsl(219, 9%, 45%)",
                grayish_blue: "hsl(220, 14%, 75%)",
                lightgrayblue: "hsl(223, 64%, 98%)",
                attribution: "hsl(228, 45%, 44%)",
            },
            fontFamily: {
                body: ["Kumbh Sans"],
            },
            keyframes: {
                slidein: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                zoom: {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
            },
            animation: {
                slidein: "slidein .45s ease-in-out",
                zoom: "zoom .15s ease-in-out",
            },
            boxShadow: {
                "3xl": "0 0 0 10000px rgba(0,0,0,0.75)",
            },
        },
    },
};
