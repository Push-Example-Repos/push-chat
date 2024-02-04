export interface Message {
  type: string;
  content: string;
}

interface Meta {
  group: boolean;
}

export interface Raw {
  fromCAIP10: string;
  toCAIP10: string;
  toDID: string;
  encType: string;
  encryptedSecret: string;
  signature: string;
  sigType: string;
  verificationProof: string;
  previousReference: null | string;
}

export interface MessageResponse {
  event?: string;
  origin?: string;
  timestamp: string;
  chatId?: string;
  from?: string;
  to?: string[];
  message?: Message;
  meta?: Meta;
  reference?: string;
  fromCAIP10?: string;
  toCAIP10?: string;
  fromDID: string;
  toDID?: string;
  encType?: string;
  encryptedSecret?: string;
  signature?: string;
  sigType?: string;
  verificationProof?: string;
  previousReference?: null | string;
  group?: boolean;
  type?: string;
  messageType: string;
  messageContent: string;
}
