const fetchLatestArticle = require('../lib/fetchLatestArticle.js');

module.exports = (req, res) => {
    fetchLatestArticle().then(article => {
        const json = JSON.stringify({ article });
        res.status(200).send(json);
    })
};
