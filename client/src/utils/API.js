import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

const BASEURL2 = "https://www.omdbapi.com/?t=";
const APIKEY2 = "&apikey=trilogy";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  omdbSearch: function (query) {
    return axios.get(BASEURL2 + query + APIKEY2);
  },
  getArticles: function (query) {
    return axios.get("/api/search", { params: { q: query } });
  }

  // request.get({
  //   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  //   qs: {
  //     'api-key': "9652878909cb4e5584a00be6cc2abfa9",
  //     'begin_date': "20180101",
  //     'end_date': "20180701",
  //     'sort': "newest"
  //   },
  // }, function(err, response, body) {
  //   body = JSON.parse(body);
  //   console.log(body);
  // })

};

