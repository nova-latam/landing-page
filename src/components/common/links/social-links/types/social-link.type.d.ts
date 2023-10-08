export interface SocialLinkProps {
    name: string;
    link: string;
    username?: string;
    Icon: () => JSX.Element;
}