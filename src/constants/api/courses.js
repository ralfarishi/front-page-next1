import axios from "@/configs/axios";

export default {
	all: (options = { params: { status: "published" } }) =>
		axios.get(`/api/courses`, options).then((res) => res.data),
	details: (id) => axios.get(`/api/courses/${id}`).then((res) => res.data),
};
