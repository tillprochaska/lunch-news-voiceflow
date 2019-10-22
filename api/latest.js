const fetchLatestArticle = require('../lib/fetchLatestArticle.js');

module.exports = (req, res) => {
    fetchLatestArticle().then(article => {
        res.setHeader('Cache-Control', 's-maxage=3600');
        res.status(200).json({ article });
    })
};
