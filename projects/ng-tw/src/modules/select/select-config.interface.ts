export interface TwSelectConfig {
    select: {
        host: {
            class: string;
            ignore: string;
        };
        panel: {
            class: string;
            mandatoryClass: string;
            ignore: string;
        };
    };
    option: {
        class: string;
        ignore: string;
        indicatorClass: string;
        indicatorMandatoryClass: string;
        activeClass: string;
        selectedClass: string;
    };
}
