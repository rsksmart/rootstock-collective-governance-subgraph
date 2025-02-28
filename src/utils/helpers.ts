import { ethereum } from "@graphprotocol/graph-ts";

export enum ProposalState {
    Pending,
    Active,
    Canceled,
    Defeated,
    Succeeded,
    Queued,
    Expired,
    Executed
}

export function getProposalStateName(proposalState: ProposalState): string {
    if (proposalState === ProposalState.Active) {
        return "Active";
    } else if (proposalState === ProposalState.Canceled) {
        return "Canceled";
    } else if (proposalState === ProposalState.Defeated) {
        return "Defeated";
    } else if (proposalState === ProposalState.Succeeded) {
        return "Succeeded";
    } else if (proposalState === ProposalState.Queued) {  
        return "Queued";
    } else if (proposalState === ProposalState.Expired) {
        return "Expired";
    } else if (proposalState === ProposalState.Executed) {    
        return "Executed";
    } else if(proposalState === ProposalState.Pending) {
        return "Pending";
    } else {
        return "Unknown";
    }
}

export function createEventID(event: ethereum.Event): string {
    return event.block.number
      .toString()
      .concat("-")
      .concat(event.logIndex.toString());
  }