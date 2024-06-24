
import { useParams } from 'react-router-dom';
import useQueryGet from '../../hooks/useQueryGet';
import getProject from '../../api/GET/getProject';
import AppLoading from '../../components/app/update/AppLoading';
import AppError from '../../components/app/error/AppError';
import ProjectDetail from '../../components/__project/ProjectDetail';

// Default Function
export default function ProjectDetailPage() {
  const { id } = useParams();
  const params = { project_id: id };

  const { data:project, isLoading, error } = useQueryGet({
    query_key: `project${id}`,
    query_func: getProject,
    params: params
  });

  console.log(error);

  return (
    <>
      { isLoading && <AppLoading /> }
      { error && <AppError errMessage='failed to load project' />  }
      { project && <ProjectDetail project={project.data} /> }
    </>
  )
}
