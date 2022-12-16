import { styled, TextField } from "@mui/material";
import { useState } from "react";
import InputItemBox from "../../components/input-item-box";
import styles from "../../styles/Home.module.css";
import { PageContainer } from "../../components/page-container";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [requirements, setRequirements] = useState<string[]>([]);

  const handleAddRequirement = (item: string) => {
    setRequirements((arr) => [...arr, item]);
  };

  return (
    <PageContainer className={styles.container}>
      <h1>WRSPM - World Machine Model</h1>
      <PageContainer>
        <div>{id}</div>
        <TextField id="project-name" label="Project Name" variant="outlined" />
        <InputItemBox label="World" type="World Assumption" />
        <InputItemBox
          label="Requirements"
          items={requirements}
          type="Requirement"
          onAdd={handleAddRequirement}
        />
        <InputItemBox label="Specifications" type="Specification" />
      </PageContainer>
    </PageContainer>
  );
}
