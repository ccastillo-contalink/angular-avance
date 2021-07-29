export interface Menu {
    title: string;
    path?: string;
    children?: Menu[];
    key?: string;
    required_auth?: boolean;
}
