export interface TwInputConfig {
    global: string;
    font: {
        weight: string;
    };
    layout: {
        basic: {
            basic: string;
            tailwind: string;
            global: string;
            ignore: string;
        };
    };
    sizes: {
        sm: {
            class: string;
            ignore: string;
        };
        md: {
            class: string;
            ignore: string;
        };
        lg: {
            class: string;
            ignore: string;
        };
    };
}
