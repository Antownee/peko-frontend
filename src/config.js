const production = false;

let apiUrl = production ? "http://157.230.190.34/api" : "http://localhost:5000/api"

module.exports = {
    apiUrl
}
