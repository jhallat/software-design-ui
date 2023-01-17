import { Project } from "../models/Project";
import axios from "axios";

const emptyProject = {
  _id: "",
  name: "",
  description: "",
};

const useProject = () => {
  const createProject = async (newProject: Project): Promise<Project> => {
    const response = await axios.post(
      "http://localhost:8000/api/v1/project/new",
      { name: newProject.name, description: newProject.description }
    );
    console.log(response.data.data);
    return response.data.data as Project;
  };
  const findProject = async (id: string): Promise<Project> => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/project/${id}`
    );
    return response.data.data as Project;
  };
  return { EMPTY_PROJECT: emptyProject, createProject };
};

export default useProject;
