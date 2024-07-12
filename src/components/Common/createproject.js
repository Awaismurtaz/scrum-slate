import * as React from 'react';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import  Grid from '@mui/material/Grid';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import {Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';


const schema = yup.object().shape({
 projectname: yup.string().required("Please Enter Your project Name"),
  file: yup.string().required("Enter Your file"),
}).required();

export default function Project(props) {
  const {setValue, control,register, handleSubmit,formState:{errors}} 
  =useForm({resolver:yupResolver(schema),mode:"onChange"});
  const {open,setOpen}=props
  // const [open, setOpen] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [projectname, setProjectName]=useState();
  const [file, setFile]=useState();
  const [name,setName]=useState()
  const [role ,setRole]=useState()

 
  const handleClose = () =>{setOpen(false)}

  const onSubmit = (data) => {
    console.log(data); // Form data will be logged when submitted
  };

 

const onEditorStateChange = (newEditorState) => {
  setEditorState(newEditorState);
  // Retrieve the content as raw JSON object or text
  const contentState = newEditorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  const contentAsText = contentState.getPlainText(); // Get content as text

  setValue('description', contentAsText);
  console.log('Content as JSON:', rawContentState);
  console.log('Content as Text:', contentAsText);
  // You can do further processing or send this content to your backend, etc.
};

  return (
    <div className='modelwindow'>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box className="model">
        <form className="create_Project" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel className="label">Project Name</FormLabel>
              <TextField
                placeholder="Project name"
                name="projectname"
                required
                {...register("projectname")}
              />
            </FormControl>
            {errors.projectname && (
              <p className="error-message text-danger mt-2">
                {errors.projectname.message}
              </p>
            )}
            <label className="mt-2 mb-3 label">Description</label>
            <Box className="editor">
              <Editor
                editorState={editorState}
                wrapperClassName="wrapperClassName"
                toolbarClassName="toolbarClassName"
                editorClassName="editor-class"
                onEditorStateChange={onEditorStateChange}
                placeholder="Write your description:"
              />
            </Box>
            <label className="mt-2 mb-3 label">Attachment</label>
            <Controller
              control={control}
              {...register("file")}
              defaultValue={null}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  type="file"
                  fullWidth
                />
              )}
            />

            {errors.file && (
              <p className="error-message text-danger mt-2">
                {errors.file.message}
              </p>
            )}
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              sx={{ fontWeight: "600" }}
            >
              Add Team
            </Typography>
            <Grid container>
              <Grid md={5} style={{ marginRight: "10px" }}>
                <label className="mt-2 mb-3 label">Select Member</label>
                <Select
                  name="name"
                  placeholder="Project name"
                  required
                  sx={{ minWidth: 200 , }}
                  {...register("name")}
                >
                  <Option value="Awais">Awais</Option>
                  <Option value="Ali">Ali</Option>
                  <Option value="Afaq">Afaq</Option>
                  <Option value="Hamza">Hamza</Option>
                  <Option value="Liaqat">Liaqat</Option>
                  <Option value="Numan">Numan</Option>
                </Select>
              </Grid>
              <Grid md={5} style={{ marginRight: "10px" }}>
                <label className="mt-2 mb-3 label">Role</label>
                <Select
                  placeholder="Manager"
                  name="role"
                  {...register("role")}
                  required
                  sx={{ minWidth: 200 }}
                >
                  <Option value="Manager">Manager</Option>
                  <Option value="Q/A Tester">Q/A Tester</Option>
                  <Option value="Front End Dev">Front End Dev</Option>
                  <Option value="Back End Dev">Back End Dev</Option>
                </Select>
              </Grid>
              <Grid sx>
                <label className="mt-2 mb-3 label" />
                <Button variant="contained" className="add-btn" type="submit">
                  Add
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Save Project
              </Button>
            </Box>
         
          </form>
        </Box>
         
      </Modal>
    </div>
  );
}
