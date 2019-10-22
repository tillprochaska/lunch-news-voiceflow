const fetchLatestArticle = require('../lib/fetchLatestArticle.js');

module.exports = (req, res) => {
    fetchLatestArticle().then(article => {
        res.status(200).json({ article });
    })
};
