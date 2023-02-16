
export type Site = {
    name: string;
    route: string;
};

export type SideMenu = {
    name: string;
    route: string;
    subMenus: Site[];
};