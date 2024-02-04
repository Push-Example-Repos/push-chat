import { Member } from "./memberTypes";

export interface GroupDTO {
  members: Member[];
  pendingMembers: Member[];
  contractAddressERC20: string | null;
  numberOfERC20: number;
  contractAddressNFT: string | null;
  numberOfNFTTokens: number;
  verificationProof: string;
  groupImage: string;
  groupName: string;
  groupDescription: string;
  isPublic: boolean;
  groupCreator: string;
  chatId: string;
  meta: object | null;
  scheduleAt: number | null;
  scheduleEnd: number | null;
  groupType: string;
  status: string | null;
  rules: object;
  eventType: string;
}
