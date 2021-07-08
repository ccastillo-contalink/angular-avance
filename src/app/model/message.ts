export interface Message {
    type: TypeMessage;
    message: string;
}


export enum TypeMessage {
    SUCCESS = 'success',
    ERROR = 'error'
}