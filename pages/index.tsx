import {
  Box,
  Button,
  ButtonGroup,
  Modal,
  Paper,
  styled,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { PageContainer } from "../components/page-container";
import { useState } from "react";
import useProject from "../hooks/useProject";
import { Project } from "../models/Project";

export default function Home() {
  const dialogBoxStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 350,
    bgcolor: "background.paper",
    border: "1px solid #999999",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    padding: 1,
    paddingTop: 0,
  };

  const DialogHeading = styled("p")({
    fontsize: 16,
    color: "#006666",
  });

  const router = useRouter();

  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const projectService = useProject();
  const [newProject, setNewProject] = useState<Project>(
    projectService.EMPTY_PROJECT
  );

  const handleNewProjectDialog = (event: any) => {
    setNewProjectOpen(true);
    //router.push("/requirements")
  };

  const handleNewProjectName = (event: any) => {
    setNewProject({ ...newProject, name: event.target.value });
  };

  const handleNewProjectDescription = (event: any) => {
    setNewProject({ ...newProject, description: event.target.value });
  };

  const handleCreateNewProject = async (event: any) => {
    const createdProject = await projectService.createProject(newProject);
    console.log("New project id = " + createdProject._id);
    setNewProjectOpen(false);
    router.push(`/requirements/${createdProject._id}`);
  };

  const CenteredPaper = styled(Paper)({
    marginRight: "auto",
    marginLeft: "auto",
    padding: 50,
    width: 400,
    marginTop: 100,
  });

  return (
    <>
      <CenteredPaper>
        <PageContainer>
          <Button onClick={handleNewProjectDialog}>Create New Project</Button>
          <Button>Load Existing Project</Button>
        </PageContainer>
      </CenteredPaper>
      <Modal open={newProjectOpen}>
        <Box sx={dialogBoxStyle}>
          <DialogHeading>Create New Project</DialogHeading>
          <PageContainer>
            <TextField
              onChange={handleNewProjectName}
              label="New Project Name"
              value={newProject.name}
              fullWidth
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={5}
              onChange={handleNewProjectDescription}
              value={newProject.description}
            />
            <ButtonGroup>
              <Button onClick={handleCreateNewProject}>Create</Button>
              <Button>Cancel</Button>
            </ButtonGroup>
          </PageContainer>
        </Box>
      </Modal>
    </>
  );
}
