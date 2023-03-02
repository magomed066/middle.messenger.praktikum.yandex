export interface Props {
    url: string;
    alt: string;
    onClick: () => void;
    events?: {
        click: () => void;
    };
}
