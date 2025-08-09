const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    // Use 11ty's Syntax Highlight plugin.
    eleventyConfig.addPlugin(syntaxHighlight);

    // Copy CSS files
    eleventyConfig.addPassthroughCopy("src/css");

    // Copy images folder
    eleventyConfig.addPassthroughCopy("src/images");

    // Add a collection for just the 5 most recent posts
    eleventyConfig.addCollection("recentPosts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*.md")
            .sort((a, b) => b.date - a.date)
            .slice(0, 5);
    });

    // Add a collection for blog posts, sorted by date (newest first)
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
            return b.date - a.date; // b.date - a.date = newest first
        });
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};