import { GroupDTO } from "./groupTypes";

type IMessageIPFS = any;

export interface Contact {
  about?: string | null;
  chatId?: string;
  combinedDID?: string;
  did?: string;
  groupInformation?: string | null;
  intent?: string;
  intentSentBy?: string;
  intentTimestamp?: string;
  msg?: IMessageIPFS;
  name?: string | null;
  profilePicture?: string;
  publicKey?: string;
  threadhash?: string;
  wallets?: string[];
}
