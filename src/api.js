import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api/unsplash.com/search/photos/?client_id=WbZCrs9fC38kbyE1R6RDjLceCN7b1sOsoIG6mtDnD74'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages
