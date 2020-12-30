const settings = {
  "name": "simonbc",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Simon B. Carstensen",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Working with me",
              "/working-with-me"
            ],
            [
              "My story",
              "/my-story"
            ],
            [
              "Writings",
              "/writings"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.simonbc.com",
          "homepage": "home",
          "postsPage": "blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
