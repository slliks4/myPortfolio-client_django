// Hooks Import
import useQueryGet from '../../hooks/useQueryGet';

// Api Imports
import getBlogs from '../../api/GET/getBlogs';

// Default Function
export default function HomeBlog({ limit=null, skip=null, timer=15000 }) {
  // removes any empty strings from the array and  concatenates the array elements with &
  const params = [
    limit ? `limit=${limit}` : '',
    skip ? `skip=${skip}` : ''
  ].filter(Boolean).join('&');

  const query_key = "blogs";
  const { data:blogs, isLoading, error } = useQueryGet({ query_key:query_key, query_func:getBlogs, params:params });

  return (
    <>
      { isLoading && <h1>loading ...</h1> }
      { error && <h1>{ error.message }</h1> }
      { blogs?.data.map(blog=>(
        <li key={blog.id}>
          <h3>{ blog.title }</h3>
          <p>{ blog.text }</p>
        </li>
      ))}
    </>
  )
}
