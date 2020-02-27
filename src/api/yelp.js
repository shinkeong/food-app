import axios from 'axios';


export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses/',
	headers: {
		Authorization: 'Bearer vocBWg5tTTWG8-klccOOSlkOSblAXourO13rEgQfaQUuMDpLkiLylsKYvBUEjGr76YUFCMSHqXUK8zDZq3LfNTUhzb5WOIiCqYkvxdP9E4OaOeod1ON8-Qguf19WXnYx'
	}
});