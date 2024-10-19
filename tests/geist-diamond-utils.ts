import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  MembershipExtended,
  Approval,
  ApprovalForAll,
  GeistIDCreated,
  Initialized,
  Transfer,
  DiamondCut,
  OwnershipTransferred
} from "../generated/GeistDiamond/GeistDiamond"

export function createMembershipExtendedEvent(
  _owner: Address,
  tokenId: BigInt,
  _charge: BigInt,
  expiresOn: BigInt,
  lastCharged: BigInt
): MembershipExtended {
  let membershipExtendedEvent = changetype<MembershipExtended>(newMockEvent())

  membershipExtendedEvent.parameters = new Array()

  membershipExtendedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  membershipExtendedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  membershipExtendedEvent.parameters.push(
    new ethereum.EventParam(
      "_charge",
      ethereum.Value.fromUnsignedBigInt(_charge)
    )
  )
  membershipExtendedEvent.parameters.push(
    new ethereum.EventParam(
      "expiresOn",
      ethereum.Value.fromUnsignedBigInt(expiresOn)
    )
  )
  membershipExtendedEvent.parameters.push(
    new ethereum.EventParam(
      "lastCharged",
      ethereum.Value.fromUnsignedBigInt(lastCharged)
    )
  )

  return membershipExtendedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createGeistIDCreatedEvent(
  owner: Address,
  tokenId: BigInt,
  name: string,
  referrer: Address,
  expiresOn: BigInt,
  createdAt: BigInt,
  lastCharged: BigInt
): GeistIDCreated {
  let geistIdCreatedEvent = changetype<GeistIDCreated>(newMockEvent())

  geistIdCreatedEvent.parameters = new Array()

  geistIdCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  geistIdCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  geistIdCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  geistIdCreatedEvent.parameters.push(
    new ethereum.EventParam("referrer", ethereum.Value.fromAddress(referrer))
  )
  geistIdCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "expiresOn",
      ethereum.Value.fromUnsignedBigInt(expiresOn)
    )
  )
  geistIdCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )
  geistIdCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "lastCharged",
      ethereum.Value.fromUnsignedBigInt(lastCharged)
    )
  )

  return geistIdCreatedEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createDiamondCutEvent(
  _diamondCut: Array<ethereum.Tuple>,
  _init: Address,
  _calldata: Bytes
): DiamondCut {
  let diamondCutEvent = changetype<DiamondCut>(newMockEvent())

  diamondCutEvent.parameters = new Array()

  diamondCutEvent.parameters.push(
    new ethereum.EventParam(
      "_diamondCut",
      ethereum.Value.fromTupleArray(_diamondCut)
    )
  )
  diamondCutEvent.parameters.push(
    new ethereum.EventParam("_init", ethereum.Value.fromAddress(_init))
  )
  diamondCutEvent.parameters.push(
    new ethereum.EventParam("_calldata", ethereum.Value.fromBytes(_calldata))
  )

  return diamondCutEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
