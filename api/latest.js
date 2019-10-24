const fetchLatestArticle = require('../lib/fetchLatestArticle.js');
const md5 = require('md5');

module.exports = (req, res) => {
    fetchLatestArticle().then(article => {
        const date = new Date();
        const items = article.map(item => {
            return `
                <item>
                    <title>Hallo</title>
                    <link>https://business-punk.com</link>
                    <pubDate>${ date.toISOString() }</pubDate>
                    <description>${ item }</description>
                    <guid>${ md5(item) }</guid>
                </item>
            `;
        });

        const rss = `
            <?xml version="1.0" encoding="UTF-8" ?>
            <rss version="2.0">
                <channel>
                    <ttl>30</ttl>
                    ${ items.join('') }
                </channel>
            </rss>
        `;

        res.setHeader('Cache-Control', 's-maxage=3600');
        res.setHeader('Content-Type', 'application/rss+xml');
        res.status(200);
        res.send(rss);
    });
};
