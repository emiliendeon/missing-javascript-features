// make first character uppercase
const capitalize = (string) => `${string.charAt(0).toUpperCase()}${string.substring(1)}`;

// cut and add ellipsis at a given string length
const ellipsize = (string, maxLength) =>
    `${string.substring(0, maxLength)}${string.length > maxLength ? "..." : ""}`;

// add 's' character add the end of the string if not present
const pluralize = (string) => `${string}${/s$/.test(string) ? "" : "s"}`;

// format string based on a given quantity
const formatPlural = (string, quantity) => (quantity >= 2 ? pluralize(string) : string);
