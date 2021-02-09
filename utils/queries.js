import gql from 'graphql-tag'

// QUERIES
export const GET_PRODUCTS = gql`
    query GET_PRODUCT($currency: Currency){
        products {
            title
            image_url
            price (currency: $currency)
        }
    }
`

export const GET_CURRENCY = gql`
    query {
        currency
    }
`