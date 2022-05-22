export interface TwButtonConfig {
    global: string;
    font: {
        weight: string;
    };
    disabled: {
        basic: {
            class: string;
            ignore: string;
        };
        raised: {
            class: string;
            ignore: string;
        };
        stroked: {
            class: string;
            ignore: string;
        };
        flat: {
            class: string;
            ignore: string;
        };
    };
    layout: {
        basic: {
            basic: string;
            primary: string;
            secondary: string;
            danger: string;
            tailwind: string;
            global: string;
            ignore: string;
        };
        raised: {
            basic: string;
            primary: string;
            secondary: string;
            danger: string;
            tailwind: string;
            global: string;
            ignore: string;
        };
        stroked: {
            basic: string;
            primary: string;
            secondary: string;
            danger: string;
            tailwind: string;
            global: string;
            ignore: string;
        };
        flat: {
            basic: string;
            primary: string;
            secondary: string;
            danger: string;
            tailwind: string;
            global: string;
            ignore: string;
        };
    };
    sizes: {
        xs: {
            class: string;
            ignore: string;
        };
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
        xl: {
            class: string;
            ignore: string;
        };
    };
}
