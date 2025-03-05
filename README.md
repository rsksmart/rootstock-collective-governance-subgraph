# Rootstock Collective Governance Subgraph

This subgraph sources events from the DAO Collective Governance [contracts](https://explorer.rootstock.io/address/0x71ac6ff904a17f50f2c07b693376ccc1c92627f0). It indexes on-chain events of the DAO Collective and allows us to track the status of proposals, including the proposer, the voters, and the number of votes.

## Queries

Here are example queries demonstrating the capabilities of the subgraph:

### Proposals

Get the newest proposals

```
{
  proposals(first: 5, orderDirection: desc, orderBy: createdAt) {
    proposalId
    proposer {
      id
    }
    targets
    state
    voteEnd
    voteStart
    values
    votesAbstains
    votesAgainst
    votesFor
    description
    createdAt
    events {
      ... on ProposalCanceled {
        id
      }
      ... on ProposalCreated {
        id
      }
      ... on ProposalExecuted {
        id
        transactionHash
      }
      ... on ProposalQueued {
        id
      }
    }
  }
}
```

Get the executed proposals

```
{
  proposals(
    first: 5
    orderDirection: desc
    orderBy: createdAt
    where: {state: Executed}
  ) {
    proposalId
    proposer {
      id
    }
    targets
    state
    voteEnd
    voteStart
    values
    votesAbstains
    votesAgainst
    votesFor
    description
    createdAt
    events {
      ... on ProposalCanceled {
        id
      }
      ... on ProposalCreated {
        id
      }
      ... on ProposalExecuted {
        id
        transactionHash
      }
      ... on ProposalQueued {
        id
      }
    }
  }
}
```

Retrieve the most voted proposal

```
{
  proposals(orderDirection: desc, orderBy: votesFor, where: {}, first: 1) {
    proposalId
    proposer {
      id
    }
    targets
    state
    voteEnd
    voteStart
    values
    votesAbstains
    votesAgainst
    votesFor
    description
    createdAt
    events {
      ... on ProposalCanceled {
        id
      }
      ... on ProposalCreated {
        id
      }
      ... on ProposalExecuted {
        id
        transactionHash
      }
      ... on ProposalQueued {
        id
      }
    }
  }
}
```

Get the proposer of the proposal

```
{
  proposals(first: 1, where: {proposalId: "PROPOSAL_ID"}) {
    proposalId
    description
    proposer {
      id
    }
  }
}
```

Get a list of all voters for a proposal
```
{
  proposals(first: 1, where: {proposalId: "PROPOSAL_ID"}) {
    proposalId
    votes {
      voter {
        id
      }
    }
  }
}
```


### Proposers

Retrieve proposals by account (*Proposers*)

```
{
  accounts(where: {Proposals_: {description_not: "null"}}) {
    id
    Proposals {
      proposalId
    }
  }
}
```

### Voters

Retrieve the votes by account

```
{
  accounts {
    id
    VoteCasts {
      proposal {
        proposalId
      }
    }
  }
}
```