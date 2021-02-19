import * as axios from 'axios'


export const GetResultSum = {
    house(building, height, material, sizex, sizey) {
        return (
            axios.get(`https://data.techart.ru/lab/json/?building=${building}&height=${height}&material=${material}&sizex=${sizex}&sizey=${sizey}`)
                 .then(response => {
                    return response.data
                 })
        )
    },
    garage(building, material, sizex, sizey) {
        return (
            axios.get(`https://data.techart.ru/lab/json/?building=${building}&height=1&material=${material}&sizex=${sizex}&sizey=${sizey}`)
                 .then(response => {
                     return response.data
                 })
        )
    }
}