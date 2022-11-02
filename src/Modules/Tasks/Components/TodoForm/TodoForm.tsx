import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { useToggleTasks } from "../../../../Common/Context/TasksContext";
import { useTaskById } from "../../Hooks/useTaskById";
import { useCreateTask, useUpdateTask } from "../../Api/mutations";
import { useHandleChangeAppUi } from "../../../../Common/Context/AppUIContext";
import { EReactQueryStatus } from "../../../../Common/Enums";
import { transformTaskDataDto } from "../../Utils/transformTaskDataDto";

export const TodoForm = (): JSX.Element => {
  const [values, setValues] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const { taskDataCtx } = useToggleTasks();
  const { taskItemData } = useTaskById(taskDataCtx.id);
  const { appUiOptions, handleChangeAppUi } = useHandleChangeAppUi();

  const createTask = useCreateTask();
  const updateTask = useUpdateTask();

  const isCreateForm = taskDataCtx?.id ? false : true;

  useEffect(() => {
    if (taskItemData?.data) {
      const { title, description } = taskItemData.data;
      setValues({ title, description });
    }
  }, [taskDataCtx, taskItemData]);

  if (
    createTask.status === EReactQueryStatus.SUCCESS ||
    updateTask.status === EReactQueryStatus.SUCCESS
  ) {
    handleChangeAppUi({ ...appUiOptions, isModalOpen: false });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const taskDataDto = transformTaskDataDto(values, taskDataCtx);
    if (isCreateForm) {
      createTask.mutate(taskDataDto);
    } else {
      updateTask.mutate(taskDataDto);
    }
  };

  const setValue = (field: string, value: string) => {
    setValues((old: any) => ({ ...old, [field]: value }));
  };

  return (
    <Box
      component="form"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Box mb={4} width="100%">
        <InputLabel>Title:</InputLabel>
        <Input
          style={{ width: "100%" }}
          value={values.title}
          onChange={(e) => setValue("title", e.target.value)}
          required
        />
      </Box>

      <Box>
        <InputLabel>Description:</InputLabel>
        <TextareaAutosize
          value={values.description}
          onChange={(e) => setValue("description", e.target.value)}
          minRows={6}
          style={{ width: "100%", borderRadius: "4px" }}
          required
        />
      </Box>

      <Box alignSelf="flex-end">
        <Button type="submit" color="primary" variant="contained">
          {isCreateForm ? "Create" : "Save"}
        </Button>
      </Box>
    </Box>
  );
};
