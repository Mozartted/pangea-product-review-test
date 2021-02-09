import gql from 'graphql-tag'

// QUERIES
export const GET_PRODUCTS = gql`
    query {
        products {
            title
            image_url
            price (currency:USD)
        }
    }
`