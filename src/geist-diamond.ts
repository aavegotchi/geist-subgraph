import {
  MembershipExtended,
  Approval,
  ApprovalForAll,
  GeistIDCreated,
  Transfer,
  OwnershipTransferred,
  Initialized,
  DiamondCut,
} from "../generated/GeistDiamond/GeistDiamond";
import { GeistID, Invite, MembershipExtension } from "../generated/schema";
import { log } from "matchstick-as";
export function handleMembershipExtended(event: MembershipExtended): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  let geistID = GeistID.load(event.params.tokenId.toString());

  if (geistID == null) {
    log.error("GeistID not found for tokenId: {}", [
      event.params.tokenId.toString(),
    ]);
    return;
  }

  geistID.expiresAt = event.params.expiresOn;
  geistID.save();

  let extension = new MembershipExtension(
    geistID.id + "-" + event.block.timestamp.toString()
  ); //concatenate geistID.id and extendedAt
  extension.geistID = geistID.id;
  extension.expiresAt = event.params.expiresOn;
  extension.extendedAt = event.block.timestamp;

  extension.save();
}

export function handleApproval(event: Approval): void {}

export function handleInitialized(event: Initialized): void {}

export function handleDiamondCut(event: DiamondCut): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleGeistIDCreated(event: GeistIDCreated): void {
  let geistID = new GeistID(event.params.owner.toHexString());
  geistID.tokenId = event.params.tokenId;
  geistID.expiresAt = event.params.expiresOn;
  geistID.createdAt = event.params.createdAt;
  geistID.name = event.params.name;
  geistID.referrer = event.params.referrer;
  geistID.save();

  // create invite
  let invite = new Invite(geistID.id);
  invite.referrerGeistID = event.params.referrer.toHexString();
  invite.createdAt = event.block.timestamp;
  invite.save();
}

export function handleTransfer(event: Transfer): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
