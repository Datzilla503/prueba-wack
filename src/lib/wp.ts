// WordPress API Functions

const BASE_URL = 'https://example.com/wp-json/wp/v2';

/**
 * Fetch posts from WordPress API.
 * @returns {Promise<Object[]>} Array of posts
 */
export const fetchPosts = async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
        throw new Error('Error fetching posts');
    }
    return await response.json();
};

/**
 * Fetch pages from WordPress API.
 * @returns {Promise<Object[]>} Array of pages
 */
export const fetchPages = async () => {
    const response = await fetch(`${BASE_URL}/pages`);
    if (!response.ok) {
        throw new Error('Error fetching pages');
    }
    return await response.json();
};

/**
 * Fetch events from WordPress API.
 * Note: Ensure that your WP setup supports fetching events.
 * @returns {Promise<Object[]>} Array of events
 */
export const fetchEvents = async () => {
    const response = await fetch(`${BASE_URL}/events`);
    if (!response.ok) {
        throw new Error('Error fetching events');
    }
    return await response.json();
};