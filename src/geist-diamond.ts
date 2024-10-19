import { BigInt } from "@graphprotocol/graph-ts";
import {
  GeistDiamond,
  MembershipExtended,
  Approval,
  ApprovalForAll,
  GeistIDCreated,
  Initialized,
  Transfer,
  DiamondCut,
  OwnershipTransferred,
} from "../generated/GeistDiamond/GeistDiamond";
import { GeistID } from "../generated/schema";

export function handleMembershipExtended(event: MembershipExtended): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  let geistID = new GeistID(event.params.tokenId.toString());
  geistID.expiresAt = event.params.expiresOn;
  geistID.save();
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleGeistIDCreated(event: GeistIDCreated): void {
  let geistID = new GeistID(event.params.tokenId.toString());
  geistID.owner = event.params.owner;
  geistID.tokenId = event.params.tokenId;
  geistID.expiresAt = event.params.expiresOn;
  geistID.createdAt = event.params.createdAt;
  geistID.name = event.params.name;
  geistID.save();
}

export function handleTransfer(event: Transfer): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
