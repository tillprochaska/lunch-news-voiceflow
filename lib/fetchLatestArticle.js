const fetch = require('node-fetch');
const cheerio = require('cheerio');

const categoryUrl = 'https://www.business-punk.com/category/lunch-news/';

module.exports = () => {
    return fetch(categoryUrl)
        .then(res => res.text())
        .then(body => {
            const $ = cheerio.load(body);
            return articleUrl = $('.article-preview-big a').attr('href');
        })
        .then(articleUrl => {
            return fetch(articleUrl);
        })
        .then(res => res.text())
        .then(body => {
            const $ = cheerio.load(body);
            return $('.entry-content p')
                .map((index, element) => {
                    return $(element).text().trim();
                }).get();
        });
};
