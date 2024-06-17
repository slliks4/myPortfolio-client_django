// Services Import
import apiPost from "../../services/apiPost";

export default function postFeedBack({ data={} }) {
  const endpoint = '/api/postFeedBack';

  return apiPost({ endpoint, data });
}
