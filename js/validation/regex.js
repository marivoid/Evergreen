/**
 * Formats for name, email, delivery, phone and credit card number
 */
export const regex = {
    name: /^[a-z ,.'-]+$/i,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    delivery: /^\s*\S+(?:\s+\S+){2}/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    card: /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b$/im
}