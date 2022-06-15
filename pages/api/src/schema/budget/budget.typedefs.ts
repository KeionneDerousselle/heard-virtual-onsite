import gql from 'graphql-tag';

export const budgetTypeDefs = gql`
  enum BudgetCadence {
    WEEKLY
    MONTHLY
  }

  type Budget {
    id: ID
    name: String
    amount: Float
    category: String
    cadence: BudgetCadence
    createdAt: String
    updatedAt: String
    createdBy: ID
  }

  type Query {
    "Create a new budget"
    createBudget(userId: ID!, name: String!, category: String!, amount: Int!, cadence: BudgetCadence!): Budget!
  }
`;
